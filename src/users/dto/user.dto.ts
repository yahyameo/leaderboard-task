import { User } from './../user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UserDto extends CreateUserDto {
    @ApiProperty()
    id: number;
    constructor(user: User) {
        super();
        this.id = user.id;
        this.username = user.username;
    }
}
