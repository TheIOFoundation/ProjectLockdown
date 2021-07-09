export class BaseApiResponse<T> {
    public data: T; // Decorator is added in the extended class below, since that will override this one.

    public meta: any;
}
export interface BaseApiErrorObject {
    statusCode: number;

    message: string;

    localizedMessage: string;

    errorName: string;

    details: unknown;

    path: string;

    requestId: string;

    timestamp: string;
}

export interface BaseApiErrorResponse {
    error: BaseApiErrorObject;
}
