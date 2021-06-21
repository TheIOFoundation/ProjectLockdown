import Config, { getEnvVariable, NoEnvVariableError } from './config';

describe('Testing function getEnvVariable', () => {
    describe('Retrieving existent variable', () => {
        it('Should return defined value', () => {
            const nodeEnv = getEnvVariable('NODE_ENV');
            expect(nodeEnv).toBeDefined();
        });
    });
    describe('Retrieving nonexistent variable', () => {
        it('Should throw an error', () => {
            const randomVarName = 'JUST_A_RANDOM_VARIABLE';

            expect(() => {
                getEnvVariable(randomVarName);
            }).toThrow(NoEnvVariableError);
        });
    });
});

describe('Testing config fields', () => {
    describe('Testing required fields for dbConnection', () => {
        it('Should contain: database, host, port, userName, password', () => {
            const dbConnection = Config.getDbConnection();
            expect('database' in dbConnection).toBe(true);
            expect('host' in dbConnection).toBe(true);
            expect('port' in dbConnection).toBe(true);
            expect('userName' in dbConnection).toBe(true);
            expect('password' in dbConnection).toBe(true);
        });
    });
    describe('Testing required fields for appConfig', () => {
        it('Should contain: port', () => {
            const appConfig = Config.getAppConfig();
            expect('port' in appConfig).toBe(true);
            expect(typeof appConfig.port == 'number').toBe(true);
        });
    });
});
