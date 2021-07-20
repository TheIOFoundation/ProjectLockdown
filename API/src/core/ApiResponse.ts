import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import {
    getResponseFormater,
    ResponseFormater,
    jsonFormater,
} from './ResponseFormater';
import {
    BaseApiErrorObject,
    BaseApiErrorResponse,
    BaseApiResponse,
} from '../app/shared/dtos/base-api-response.dto';
import { BadRequestError } from './ApiError';

const defaultFormater: ResponseFormater = jsonFormater;

export abstract class ApiResponse {
    constructor(
        protected status: HttpStatus,
        protected message: string,
        protected formaterQueue = [defaultFormater],
    ) {}

    /*
     * @function        send
     * @desc            given the Response object, create Response with given data this object contains
     *
     * @params          res {Response}  response object from controller
     *
     * @return          Response object filled with header status, data and other data needed for the response
     */
    public send(res: Response): Response {
        return this.prepare(res, this);
    }

    /*
     * @func            prepare
     * @desc            prepare response with given status and data respone in formated form
     *                  the content type will be formated regard to config type (default - environment variable)
     *                                                         then accepteable type in the request
     * @params          res {Response} response object
     * @params          response {extends ApiResponse} the response data in response body
     *
     * @return          response object with given status in header and jsonified T's data in body
     */
    protected prepare<T extends ApiResponse>(
        res: Response,
        response: T,
    ): Response {
        this.setContentType(res, this.formaterQueue);
        const formater = getResponseFormater(
            res.get('Content-Type'),
            this.formaterQueue,
        );
        const body = formater.format(ApiResponse.sanitize(response));

        return res.status(this.status).send(body);
    }

    protected setContentType(
        res: Response,
        formaterQueue: ResponseFormater[],
    ): Response {
        const formatCallbacks = this.getFormatCallbacks(
            res,
            formaterQueue,
            (formater: ResponseFormater) => {
                res.type(formater.getContentType());
            },
        );

        return res.format(formatCallbacks);
    }

    /*
     * @func            getFormatCallbacks
     * @desc            construct the callback object
     *                  matching available content type
     *                  read more: https://expressjs.com/en/api.html#res.format
     * @params          res {Response} - express response object
     * @params          formaterQueue {ResposneFormater[]} available formateres sorted in queue
     *                      if no accept type specified in req, the first formater in queue will be selected
     * @params          callback {(ResponseFormater) => void} what the format function will call on matching type
     *
     * @return          return callback object with pairs of type: function
     */
    private getFormatCallbacks(
        res: Response,
        formaterQueue: ResponseFormater[],
        callback: (formater: ResponseFormater) => void,
    ) {
        const formatCallbacks = {};
        formaterQueue.map((formater) => {
            formatCallbacks[formater.getContentType()] = () => {
                callback(formater);
            };
        });

        formatCallbacks['default'] = () => {
            const path = res.locals.originalUrl || 'unknown';
            const requestId = res.locals.requestId || 'unknown'; //TODO: update this when there is middleware to add uuid for each request
            const detail = `Available format for this endpoint: ${formaterQueue.toString()}`;
            throw new BadRequestError(
                'Accept-type does not match any available response content type',
                path,
                requestId,
                detail,
            );
        };
        return formatCallbacks;
    }

    /*
     * @func            sanitize
     * @desc            prepare object for the response
     *                  remove all undefined/null fields and functions
     * @params          T {extends ApiResponse} subclass of ApiResponse contatining data for response.
     *
     * @returns         an object contains: statusCode, data (if subclass has the field)
     */
    private static sanitize<T extends ApiResponse>(response: T): T {
        //Create a clone copy of response's fields
        const clone: T = {} as T;
        Object.assign(clone, response);
        //Remove unneeded fields
        delete clone.status;
        delete clone.formaterQueue;

        for (const i in clone) {
            if (typeof clone[i] === 'undefined') delete clone[i];
        }

        return clone;
    }
}

export class SuccessResponse<T> extends ApiResponse {
    constructor(
        message: string,
        private data: BaseApiResponse<T>,
        formaterQueue = [defaultFormater],
    ) {
        super(HttpStatus.OK, message, formaterQueue);
    }

    send(res: Response): Response {
        return super.prepare<SuccessResponse<T>>(res, this);
    }
}

export abstract class ErrorResponse
    extends ApiResponse
    implements BaseApiErrorResponse
{
    constructor(
        statusCode: HttpStatus,
        message = 'Bad Request',
        public error: BaseApiErrorObject,
        formaterQueue = [defaultFormater],
    ) {
        super(statusCode, message, formaterQueue);
    }

    send(res: Response): Response {
        return super.prepare<ErrorResponse>(res, this);
    }
}

export class InternalErrorResponse extends ErrorResponse {
    constructor(
        message = 'Internal Error',
        error: BaseApiErrorObject,
        formaterQueue = [defaultFormater],
    ) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, message, error, formaterQueue);
    }
}

export class NotFoundResponse extends ErrorResponse {
    private url: string | undefined;

    constructor(
        message = 'Not Found',
        error: BaseApiErrorObject,
        formaterQueue = [defaultFormater],
    ) {
        super(HttpStatus.NOT_FOUND, message, error, formaterQueue);
    }

    send(res: Response) {
        this.url = res.req?.originalUrl;
        return super.prepare<NotFoundResponse>(res, this);
    }
}

export class AuthFailureResponse extends ErrorResponse {
    constructor(
        message = 'Authentication Failure',
        error: BaseApiErrorObject,
        formaterQueue = [defaultFormater],
    ) {
        super(HttpStatus.UNAUTHORIZED, message, error, formaterQueue);
    }
}

export class ForbiddenReponse extends ErrorResponse {
    constructor(
        message = 'Forbidden',
        error: BaseApiErrorObject,
        formaterQueue = [defaultFormater],
    ) {
        super(HttpStatus.FORBIDDEN, message, error, formaterQueue);
    }
}

export class BadRequestResponse extends ErrorResponse {
    constructor(
        message = 'Bad Request',
        error: BaseApiErrorObject,
        formaterQueue = [defaultFormater],
    ) {
        super(HttpStatus.BAD_REQUEST, message, error, formaterQueue);
    }
}
