import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { DataSetEntriesModule } from './modules/';
=======
import { DataSetEntriesModule } from './endpoints';
>>>>>>> 646b423ff6135c71716eff10e81662191c55b807
@Module({
    imports: [DataSetEntriesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
