import { SuccessResponse } from './ApiResponse';
import * as httpMocks from 'node-mocks-http';
import * as events from 'events';
import { BadRequestException } from '@nestjs/common';

describe('Test API response class with different content type', () => {
    it('Should return response in JSON as default', () => {
        const mockReq = httpMocks.createRequest();
        const res = httpMocks.createResponse({
            req: mockReq,
            eventEmitter: events.EventEmitter,
        });
        const data = {
            text: 'Hello world!',
        };

        res.on('end', () => {
            expect(res._getData()).toBe(
                JSON.stringify({
                    message: 'Test suceeded',
                    data,
                }),
            );
        });
        const apiResponse = new SuccessResponse('Test suceeded', data);
        apiResponse.send(res);
    });
    it('Should return response in JSON', () => {
        const mockReq = httpMocks.createRequest({
            headers: {
                accept: 'application/json',
            },
        });
        const res = httpMocks.createResponse({
            req: mockReq,
            eventEmitter: events.EventEmitter,
        });
        const data = {
            text: 'Hello world!',
        };

        res.on('end', () => {
            expect(res._getData()).toBe(
                JSON.stringify({
                    message: 'Test suceeded',
                    data,
                }),
            );
        });
        const apiResponse = new SuccessResponse('Test suceeded', data);
        apiResponse.send(res);
    });

    it('Should throws error for unsupported content type', () => {
        const mockReq = httpMocks.createRequest({
            headers: {
                accept: 'text/html',
            },
        });
        const res = httpMocks.createResponse({
            req: mockReq,
            eventEmitter: events.EventEmitter,
        });
        const data = {
            text: 'Hello world!',
        };

        const apiResponse = new SuccessResponse('Test suceeded', data);
        expect(() => apiResponse.send(res)).toThrow(BadRequestException);
    });
});
