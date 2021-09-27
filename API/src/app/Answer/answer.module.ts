import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AnswerController from './answer.controller';
import Answer from './answer.entity';
import AnswerService from './answer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Answer])],
    providers: [AnswerService],
    controllers: [AnswerController],
})
export default class AnswerModule {}
