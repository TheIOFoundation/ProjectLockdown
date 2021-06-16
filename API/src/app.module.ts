import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSetEntriesModule } from './modules/';
@Module({
    imports: [DataSetEntriesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
