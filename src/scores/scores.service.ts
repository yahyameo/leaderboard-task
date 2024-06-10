// src/scores/scores.service.ts
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Score } from './score.entity';
import { User } from '../users/user.entity';
import { AuthUser } from 'src/utils/auth.user';
import { CreateScoreDto } from './create.score.dto';

@Injectable()
export class ScoresService {
    constructor(
        @Inject('ScoreRepository')
        private readonly scoreRepository: typeof Score
    ) { }

    async create(user: AuthUser, dto: CreateScoreDto): Promise<Score> {
        const userId = user.isAdmin ? dto.userId : user.userId;
        if (user.isAdmin && !dto.userId) {
            throw new HttpException("Please enter user id", HttpStatus.NOT_FOUND);
        }
        return new Score({ userId: userId, value: dto.value }).save();
    }

    async findTopTen(): Promise<Score[]> {
        return this.scoreRepository.findAll({
            order: [['value', 'DESC']],
            limit: 10,
            include: [{model:User,attributes:["id","username"]}],
        });
    }
}
