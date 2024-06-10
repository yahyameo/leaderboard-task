// src/auth/auth.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcryptjs';
import { UserLoginRequestDto } from 'src/users/dto/user-login-request.dto';
import { genSalt, hash, compare } from 'bcryptjs';
import { UserLoginResponseDto } from 'src/users/dto/user-login-response.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findByUsername(username);
        if (user && (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(dto: UserLoginRequestDto) {
        const user = await this.usersService.findByUsername(dto.username);

        const isMatch = await compare(dto.password, user.password);
        if (!isMatch) {
            throw new HttpException(
                'Invalid email or password.',
                HttpStatus.BAD_REQUEST,
            );
        }

        const access_token = this.jwtService.sign({ username: user.username });
        return new UserLoginResponseDto(user, access_token);
    }
}
