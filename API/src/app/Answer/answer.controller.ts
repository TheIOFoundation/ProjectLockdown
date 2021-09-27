import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
import Answer from './answer.entity';
import AnswerService from './answer.service';

@Controller('Answer')
export default class AnswerController {
    constructor(private readonly service: AnswerService) {}

    @Get()
    async getAnswers(): Promise<Answer[]> {
        return this.service.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: ObjectID): Promise<Answer> {
        return this.service.getOne(id);
    }

    @Post('/new')
    async newAnswer(@Body() input: Answer): Promise<Answer> {
        return this.service.insertOne(input);
    }

    @Patch('/update')
    async updateDataPoint(@Body() input: Answer): Promise<Answer> {
        return this.service.updateOne(input);
    }

    @Delete('/delete/:id')
    async deleteDataPoint(
        @Param('id') id: ObjectID,
    ): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
