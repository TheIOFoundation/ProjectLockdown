import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import Answer from './Answer';

@Injectable()
export default class AnswerService {
    constructor(
        @InjectRepository(Answer)
        private readonly repository: Repository<Answer>,
    ) {}

    async getAll(): Promise<Answer[]> {
        return this.repository.find();
    }

    async getOne(id: ObjectID): Promise<Answer> {
        return this.repository.findOneOrFail(id);
    }

    async insertOne(input: Answer): Promise<Answer> {
        const newAnswer = this.repository.create(input);
        await this.repository.save(newAnswer);
        return newAnswer;
    }

    async updateOne(answer: Answer): Promise<Answer> {
        const { id } = answer;
        await this.repository.update({ id }, answer);
        return this.getOne(id);
    }

    async deleteOne(
        id: ObjectID,
    ): Promise<{ deleted: boolean; message?: string }> {
        try {
            await this.repository.delete(id);
            return { deleted: true };
        } catch (err) {
            return { deleted: false, message: err.message };
        }
    }
}
