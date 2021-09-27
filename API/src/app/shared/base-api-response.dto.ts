export class BaseApiResponse<T> {
    public data: T; // Decorator is added in the extended class below, since that will override this one.

    public meta: any;
}
export class BaseApiErrorObject {
    public statusCode: number;

    public message: string;

    public localizedMessage: string;

    public errorName: string;

    public details: unknown;

    public path: string;

    public requestId: string;

    public timestamp: string;
}

export class BaseApiErrorResponse {
    public error: BaseApiErrorObject;
}
