import { Controller, ForbiddenException, Get,Post, Body } from '@nestjs/common';
import { UserLoginDto } from 'src/users/user.dto';
import { AppService } from './app.service';
import { UsersService } from '../users/users.service';

@Controller()
export class AppController { 
  constructor(private readonly appService: AppService,
    private userService: UsersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('tours-hello')
  getHelloTours() {
    return {
      name: 'Hello tours',
      message: this.appService.getHelloTours(),
    };
  }

  @Post('login')
  async login(@Body() user : UserLoginDto) {
    const res = await this.userService.checkUserByPassword(user);
    if(!res) {
      throw new ForbiddenException('Authentication failed');
    }
    return this.userService.currentUser;
  }
}
