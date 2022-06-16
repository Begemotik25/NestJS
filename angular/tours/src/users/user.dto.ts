import {IsEmail, IsNotEmpty } from "class-validator"

export class UserDto {
    @IsNotEmpty() name: string;
    @IsNotEmpty() token: string;
}

export class UserLoginDto {
    @IsNotEmpty() readonly name: string;
    @IsNotEmpty() readonly password: string;
}

export class UserTokenDto {
    @IsNotEmpty() readonly token: string;
}