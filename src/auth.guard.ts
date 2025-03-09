
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'crypto';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest()
    const headers = request.headers

    try {

      const access_token: any = headers && headers?.authorization && headers?.authorization?.split(' ')[1]
      const decoded = this.jwtService.verify(access_token)

      request.user = decoded
      return true;

    } catch (err) {
      throw new UnauthorizedException('You are not authorized')
    }
  }


}
// @Injectable()
// export class AuthGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     console.log(context, '--->context', context.switchToHttp().getRequest().headers, '---->headers')
//     const headers= context.switchToHttp().getRequest().headers
//     const access_token:any= headers && headers?.authorization && headers?.authorization?.split(' ')[1]
//     // console.log(access_token, '----Token')
//     if(access_token!== 'suryash') return false;
//     return true;
//   }
// }
