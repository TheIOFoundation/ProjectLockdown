import { Controller, Get } from '@nestjs/common';
import Answer from './Answer.schema';
import AnswerService from './Answer.service';

@Controller('Answer')
export default class AnswerController {
    constructor(private readonly service: AnswerService) {}

    @Get()
    async getAnswers(): Promise<Answer[]> {
        return this.service.getAll();
    }
}
