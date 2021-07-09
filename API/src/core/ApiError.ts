import { Response } from 'express';
import { BaseApiErrorObject } from '../app/shared/dtos/base-api-response.dto';
import {
    ApiResponse,
    AuthFailureResponse,
    BadRequestResponse,
    ErrorResponse,
    ForbiddenReponse,
    InternalErrorResponse,
    NotFoundResponse,
} from './ApiResponse';

enum ErrorType {
    BAD_TOKEN = 'BadTokenError',
    TOKEN_EXPIRED = 'TokenExpiredError',
    UNAUTHORIZED = 'AuthFailureError',
    ACCESS_TOKEN = 'AccessTokenError',
    INTERNAL = 'InternalError',
    NOT_FOUND = 'NotFoundError',
    NO_ENTRY = 'NoEntryError',
    NO_DATA = 'NoDataError',
    BAD_REQUEST = 'BadRequestError',
    FORBIDDEN = 'ForbiddenError',
}

enum ErrorCode {
    BAD_TOKEN = 100,
    TOKEN_EXPIRED = 101,
    UNAUTHORIZED = 102,
    ACCESS_TOKEN = 103,
    INTERNAL = 200,
    NOT_FOUND = 300,
    NO_ENTRY = 301,
    NO_DATA = 303,
    BAD_REQUEST = 304,
    FORBIDDEN = 104,
}

abstract class ApiError extends Error implements BaseApiErrorObject {
    constructor(
        public errorName: ErrorType,
        public message: string = 'error',
        public statusCode: ErrorCode,
        public path: string,
        public requestId: string,
        public details: unknown,
        public timestamp = Date.now().toString(),
    ) {
        super(errorName);
    }

    get localizedMessage(): string {
        return '';
    }

    abstract handle(res: Response): Response;
    }
}

export class BadTokenError extends ApiError {
    constructor(message = 'Token is not valid', path, requestId, details) {
        super(
            ErrorType.BAD_TOKEN,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }

    handle(res: Response): Response {
        const response = new AuthFailureResponse(this.message, this);
        return response.send(res);
    }
    
}

export class TokenExpiredError extends ApiError {
    constructor(message = 'Token is expired', path, requestId, details) {
        super(
            ErrorType.TOKEN_EXPIRED,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }

    handle(res: Response): Response {
        const response = new AuthFailureResponse(this.message, this);
        return response.send(res);
    }
}

export class AuthFailureError extends ApiError {
    constructor(message = 'Invalid credentials', path, requestId, details) {
        super(
            ErrorType.UNAUTHORIZED,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }
    handle(res: Response): Response {
        const response = new AuthFailureResponse(this.message, this);
        return response.send(res);
    }
}

export class InternalError extends ApiError {
    constructor(message = 'Internal error', path, requestId, details) {
        super(
            ErrorType.INTERNAL,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }
    handle(res: Response): Response {
        const response = new InternalErrorResponse(this.message, this);
        return response.send(res);
    }
}

export class NotFoundError extends ApiError {
    constructor(message = 'Not found', path, requestId, details) {
        super(
            ErrorType.NOT_FOUND,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }
    handle(res: Response): Response {
        const response = new NotFoundResponse(this.message, this);
        return response.send(res);
    }
}

export class NoEntryError extends ApiError {
    constructor(message = "Entry doesn't exist", path, requestId, details) {
        super(
            ErrorType.NO_ENTRY,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }
    handle(res: Response): Response {
        const response = new NotFoundResponse(this.message, this);
        return response.send(res);
    }
}

export class NoDataError extends ApiError {
    constructor(message = 'No data is available', path, requestId, details) {
        super(
            ErrorType.NO_DATA,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }
    handle(res: Response): Response {
        const response = new NotFoundResponse(this.message, this);
        return response.send(res);
    }
}

export class BadRequestError extends ApiError {
    constructor(message = 'Bad request', path, requestId, details) {
        super(
            ErrorType.BAD_REQUEST,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }
    handle(res: Response): Response {
        const response = new BadRequestResponse(this.message, this);
        return response.send(res);
    }
}

export class AccessTokenError extends ApiError {
    constructor(message = 'Invalid access token', path, requestId, details) {
        super(
            ErrorType.ACCESS_TOKEN,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }
    handle(res: Response): Response {
        const response = new AuthFailureResponse(this.message, this);
        return response.send(res);
    }
}

export class ForbiddenError extends ApiError {
    constructor(message = 'Permission denied', path, requestId, details) {
        super(
            ErrorType.FORBIDDEN,
            message,
            ErrorCode.BAD_TOKEN,
            path,
            requestId,
            details,
        );
    }
    handle(res: Response): Response {
        const response = new ForbiddenReponse(this.message, this);
        return response.send(res);
    }
}
