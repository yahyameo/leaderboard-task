// src/users/users.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';
import { UserLoginResponseDto } from './dto/user-login-response.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    async create(createUserDto: CreateUserDto) {
        const { username, password, isAdmin } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userFound = await this.userModel.findOne<User>({ where: { username: createUserDto.username } });
        if (userFound) {
            throw new HttpException("This username already exist", HttpStatus.FOUND);
        }
        let result = await this.userModel.create({
            username,
            password: hashedPassword,
            isAdmin,
        });
        return new UserLoginResponseDto(result);
    }

    async findByUsername(username: string): Promise<User | undefined> {
        return this.userModel.findOne({ where: { username } });
    }

    async findById(id: number): Promise<User | undefined> {
        return this.userModel.findByPk(id);
    }
}
