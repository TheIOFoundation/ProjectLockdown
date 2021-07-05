import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

import { AppModule } from './app/app.module';

const API_DEFAULT_PORT = 4000;
const API_DEFAULT_PREFIX = '/api/v2';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix(process.env.API_PREFIX || API_DEFAULT_PREFIX);
    app.use(bodyParser.json());
    app.use(helmet());
    await app.listen(process.env.API_PORT || API_DEFAULT_PORT);
}

bootstrap().catch((err) => console.error(err));
