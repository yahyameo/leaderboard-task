import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { User } from 'src/utils/decorator/user.decorator';
import { AuthUser } from 'src/utils/auth.user';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateScoreDto } from './create.score.dto';
import { Throttle } from '@nestjs/throttler';
import { ThrottlerBehindProxyGuard } from 'src/throttler-behind-proxy.guard';

@Controller('scores')
export class ScoresController {
  constructor(
    private readonly scoresService: ScoresService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @UseGuards(ThrottlerBehindProxyGuard)
  @Post()
  async create(@User() user: AuthUser, @Body() dto: CreateScoreDto) {
    return this.scoresService.create(user, dto);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return this.scoresService.findTopTen();
  }
}
