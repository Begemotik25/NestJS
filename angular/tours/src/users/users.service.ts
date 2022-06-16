import { UserLoginDto, UserTokenDto, UserDto} from './user.dto';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    currentUser: UserDto;

    constructor(@InjectRepository(User)
    private userRepo: Repository<User>) {}

    async checkUserByPassword({name, password}: UserLoginDto): Promise<boolean>{
        const user = await this.userRepo.findOne(
            {where: { username: name}}
        );
        if(!user) {
            return false;
        }
        if (user.password != password) {
            return false;
        }
        let crypto = require("crypto");
        let token = crypto.randomBytes(20).toString('hex');
        user.token = token;
        this.userRepo.save(user);

        this.currentUser = {
            name: user.username,
            token: user.token
        };
        return true;
    }

    async getUserByToken({token}: UserTokenDto):Promise<boolean> {
        let user = await this.userRepo.findOne({ where: {token} });
        if(!user) {
            return false;
        }
        this.currentUser = {
            name: user.username,
            token: user.token
        };
        return true;
    }



}
