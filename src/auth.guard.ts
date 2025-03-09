
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(context, '--->context', context.switchToHttp().getRequest().headers, '---->headers')
    const headers= context.switchToHttp().getRequest().headers
    const access_token:any= headers && headers?.authorization && headers?.authorization?.split(' ')[1]
    console.log(access_token, '----Token')
    if(access_token!== 'suryash') return false;
    return true;
  }
}
