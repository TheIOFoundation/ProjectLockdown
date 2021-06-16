import { Response } from 'express';
import {
    ApiResponse,
    AuthFailureResponse,
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

abstract class ApiError extends Error {
    constructor(
        public type: ErrorType,
        private response: ApiResponse,
        public message: string = 'error',
    ) {
        super(type);
    }

    public handle(res: Response): Response {
        return this.response.send(res);
    }
}

export class BadTokenError extends ApiError {
    constructor(message = 'Token is not valid') {
        super(ErrorType.BAD_TOKEN, new AuthFailureResponse(message), message);
    }
}

export class TokenExpiredError extends ApiError {
    constructor(message = 'Token is expired') {
        super(
            ErrorType.TOKEN_EXPIRED,
            new AuthFailureResponse(message),
            message,
        );
    }
}

export class AuthFailureError extends ApiError {
    constructor(message = 'Invalid credentials') {
        super(
            ErrorType.UNAUTHORIZED,
            new AuthFailureResponse(message),
            message,
        );
    }
}

export class InternalError extends ApiError {
    constructor(message = 'Internal error') {
        super(ErrorType.INTERNAL, new InternalErrorResponse(message), message);
    }
}

export class NotFoundError extends ApiError {
    constructor(message = 'Not found') {
        super(ErrorType.NOT_FOUND, new NotFoundResponse(message), message);
    }
}

export class NoEntryError extends ApiError {
    constructor(message = "Entry doesn't exist") {
        super(ErrorType.NO_ENTRY, new NotFoundResponse(message), message);
    }
}

export class NoDataError extends ApiError {
    constructor(message = 'No data is available') {
        super(ErrorType.NO_DATA, new NotFoundResponse(message), message);
    }
}

export class BadRequestError extends ApiError {
    constructor(message = 'Bad request') {
        super(ErrorType.BAD_REQUEST, new NotFoundResponse(message), message);
    }
}

export class AccessTokenError extends ApiError {
    constructor(message = 'Invalid access token') {
        super(ErrorType.ACCESS_TOKEN, new NotFoundResponse(message), message);
    }
}

export class ForbiddenError extends ApiError {
    constructor(message = 'Permission denied') {
        super(ErrorType.FORBIDDEN, new NotFoundResponse(message), message);
    }
}
