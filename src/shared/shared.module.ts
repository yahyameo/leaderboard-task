import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { UsersService } from 'src/users/users.service';
import { usersProviders } from 'src/users/users.providers';
import { JwtService } from '@nestjs/jwt';

@Global()
@Module({
    providers:[ConfigService],
    // providers: [ConfigService,
    //     UsersService, ...usersProviders, JwtService],
    // exports: [ConfigService,
    //     UsersService, ...usersProviders,, JwtService],
    imports: [],
    controllers: [],
})
export class SharedModule { }
