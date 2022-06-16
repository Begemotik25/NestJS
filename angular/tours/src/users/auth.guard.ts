import { Injectable,CanActivate,ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { UsersService } from "./users.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService: UsersService) {}

    canActivate (
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        if(request.headers['token']) {
            return this.userService.getUserByToken(
                {token: request.headers['token']}
            );
        }
        return false;
    }
}