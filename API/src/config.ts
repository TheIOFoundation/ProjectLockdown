import * as dotenv from 'dotenv';

const readEnvFile = () => {
    const result = dotenv.config();
    if (result.error) {
        //TODO: add debug here: result.error
        throw result.error;
    }
};
readEnvFile();

//Get Env Variable from NodeJS environment
//Throws NoEnvVariableError
export const getEnvVariable = (varName: string): string => {
    const value = process.env[varName];
    if (value && value != null) {
        return value;
    } else {
        throw new NoEnvVariableError(varName);
    }
};

export class NoEnvVariableError extends Error {
    constructor(varName: string) {
        super(`Environment Variable ${varName} is not defined`);
        //TODO: logger debug here
    }
}

export default class Config {
    private static dbConnection = null;
    private static appConfig = null;

    public static getDbConnection() {
        if (Config.dbConnection == null) {
            Config.dbConnection = Config.initDbConnection();
        }

        return Config.dbConnection;
    }

    private static initDbConnection() {
        return {
            database: getEnvVariable('DB_CONNECTION_DATABASE'),
            host: getEnvVariable('DB_CONNECTION_HOST'),
            port: getEnvVariable('DB_CONNECTION_PORT'),
            userName: getEnvVariable('DB_CONNECTION_USERNAME'),
            password: getEnvVariable('DB_CONNECTION_PASSWORD'),
        };
    }

    public static getAppConfig() {
        if (Config.appConfig == null) {
            Config.appConfig = Config.initAppConfig();
        }
        return Config.appConfig;
    }

    private static initAppConfig() {
        return {
            port: +getEnvVariable('APP_CONFIG_PORT'),
        };
    }
}

export const dbConnection = Config.getDbConnection();
export const appConfig = Config.getAppConfig();
