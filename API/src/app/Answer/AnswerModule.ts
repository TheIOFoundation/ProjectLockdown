import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AnswerController from './AnswerController';
import Answer from './Answer';
import AnswerService from './AnswerService';

@Module({
    imports: [TypeOrmModule.forFeature([Answer])],
    providers: [AnswerService],
    controllers: [AnswerController],
})
export default class AnswerModule {}
