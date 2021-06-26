import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DSLController } from './controllers/dsl.controller';
import { DSL } from './entities/dsl.entity';
import { DSLService } from './services/dsl.service';

@Module({
    imports: [TypeOrmModule.forFeature([DSL])],
    providers: [DSLService],
    controllers: [DSLController],
})
export class DSLModule {}
