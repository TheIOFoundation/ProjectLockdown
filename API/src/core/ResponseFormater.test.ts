import {
    jsonFormater,
    getResponseFormater,
    ContentType,
} from './ResponseFormater';

describe('Test Response Formaters file', () => {
    describe('Test different formaters', () => {
        it('Should format to JSON', () => {
            const data = {
                name: 'Project Lockdown',
                file: {
                    desc: 'Formating data to given type',
                    isTested: true,
                },
            };
            const json = jsonFormater.format(data);
            expect(json).toBe(
                '{"name":"Project Lockdown","file":{"desc":"Formating data to given type","isTested":true}}',
            );
        });
    });

    describe('Test function getFormater', () => {
        const availableFormaters = [jsonFormater];
        it('Should return JSON formater', () => {
            const returnFormater = getResponseFormater(
                ContentType.JSON,
                availableFormaters,
            );
            expect(returnFormater).toBe(jsonFormater);
        });
    });
});
