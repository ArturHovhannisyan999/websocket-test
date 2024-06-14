import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";
export class CreateUserDto {

    @ApiProperty({example: 'example@gmail.com', description: 'Email address'})
    @IsString({message: "Should be string"})
    @IsEmail({}, {message: "Email is not correct"})
    readonly email: string;
    @ApiProperty({example: '123456789', description: 'User password'})
    @IsString({message: "Should be string"})
    @Length(4, 16, {message: "Should be 4-16 symbols"})
    readonly password: string;
}