import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSetEntriesModule } from './endpoints';
@Module({
    imports: [DataSetEntriesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
