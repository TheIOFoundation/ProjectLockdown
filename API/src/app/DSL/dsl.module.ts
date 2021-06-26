import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DSLController } from './controllers/dsl.controller';
import { DSLEntity } from './entities/dsl.entity';
import { DSLService } from './services/dsl.service';

@Module({
    imports: [TypeOrmModule.forFeature([DSLEntity])],
    providers: [DSLService],
    controllers: [DSLController],
})
export class DSLModule {}
