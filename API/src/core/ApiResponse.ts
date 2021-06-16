import { Response } from 'express';

enum StatusCode {
    SUCCESS = '10000',
    FAILURE = '10001',
    RETRY = '10002',
    INVALID_ACCESS_TOKEN = '10003',
}

enum ResponseStatus {
    SUCCESS = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
}

export abstract class ApiResponse {
    constructor(
        protected statusCode: StatusCode,
        protected status: ResponseStatus,
        protected message: string,
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
     * @function        prepare
     * @desc            prepare response with given status and data respone
     * @params          res {Response} response object
     * @params          response {extends ApiResponse} the response data in response body
     *
     * @return          response object with given status in header and jsonified T's data in body
     */
    protected prepare<T extends ApiResponse>(
        res: Response,
        response: T,
    ): Response {
        return res.status(this.status).json(ApiResponse.sanitize(response));
    }

    /*
     * @function        sanitize
     * @desc            prepare json object for the response
     *                  remove all unneeded fields and functions
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
        for (const i in clone) {
            if (typeof clone[i] === 'undefined') delete clone[i];
        }

        return clone;
    }
}

export class SuccessResponse<T> extends ApiResponse {
    constructor(message: string, private data: T) {
        super(StatusCode.SUCCESS, ResponseStatus.SUCCESS, message);
    }

    send(res: Response): Response {
        return super.prepare<SuccessResponse<T>>(res, this);
    }
}

export class InternalErrorResponse extends ApiResponse {
    constructor(message = 'Internal Error') {
        super(StatusCode.FAILURE, ResponseStatus.INTERNAL_ERROR, message);
    }
}

export class NotFoundResponse extends ApiResponse {
    private url: string | undefined;
    constructor(message = 'Not Found') {
        super(StatusCode.FAILURE, ResponseStatus.NOT_FOUND, message);
    }

    send(res: Response) {
        this.url = res.req?.originalUrl;
        return super.prepare<NotFoundResponse>(res, this);
    }
}

export class AuthFailureResponse extends ApiResponse {
    constructor(message = 'Authentication Failure') {
        super(StatusCode.FAILURE, ResponseStatus.UNAUTHORIZED, message);
    }
}
export class ForbiddenReponse extends ApiResponse {
    constructor(message = 'Forbidden') {
        super(StatusCode.FAILURE, ResponseStatus.FORBIDDEN, message);
    }
}

export class BadRequestResponse extends ApiResponse {
    constructor(message = 'Bad Request') {
        super(StatusCode.FAILURE, ResponseStatus.BAD_REQUEST, message);
    }
}
// export class
// export class
