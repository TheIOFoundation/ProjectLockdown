import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

import { INestApplication } from '@nestjs/common';
import { AppModule } from './app/app.module';

const API_DEFAULT_PORT = 4000;
const API_DEFAULT_PREFIX = '/api/v2/';

const SWAGGER_TITLE = 'Project LockDown API';
const SWAGGER_DESCRIPTION = 'ProjectLockDown APi';
const SWAGGER_PREFIX = '/docs';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix(process.env.API_PREFIX || API_DEFAULT_PREFIX);

    if (!process.env.SWAGGER_ENABLE || process.env.SWAGGER_ENABLE === '1') {
        createSwagger(app);
    }

    app.use(bodyParser.json());
    app.use(helmet());
    await app.listen(process.env.API_PORT || API_DEFAULT_PORT);
}
function createSwagger(app: INestApplication) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const version = require('../package.json').version || '';

    const options = new DocumentBuilder()
        .setTitle(SWAGGER_TITLE)
        .setDescription(SWAGGER_DESCRIPTION)
        .setVersion(version)
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}

bootstrap().catch((err) => console.error(err));
