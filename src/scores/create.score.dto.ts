import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateScoreDto {
    @ApiProperty()
    @IsOptional()
    readonly userId: number;

    @ApiProperty()
    @IsNumber()
    readonly value: number;
}
