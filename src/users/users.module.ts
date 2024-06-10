import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [SequelizeModule.forFeature([User]), DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy, JwtService],
  exports: [UsersService],
})
export class UsersModule {}
