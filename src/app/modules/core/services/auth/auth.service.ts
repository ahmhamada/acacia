import { Injectable } from '@angular/core';
import { Method } from '../../enums/method.enum';
import { XhrService } from '../xhr/xhr.service';
import { map } from 'rxjs/operators';
import { LoginPayload } from '../../../feature/account/models/login-payload.model';
import { ResetPayload } from '../../../feature/account/models/reset-payload.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private xhrService: XhrService) {}

  login(payload: LoginPayload) {
    return this.xhrService
      .call({
        url: 'api/User/Login',
        method: Method.post,
        body: {
          email: payload.email,
          Password: payload.password,
        },
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  // getRoles() {
  //   return this.xhrService
  //     .call({
  //       url: 'api/Role/GetRoles',
  //       method: Method.get,
  //       body: {},
  //     })
  //     .pipe(
  //       map((res) => {
  //         return res;
  //       })
  //     );
  // }

  resetPassword(payload: ResetPayload) {
    return this.xhrService
      .call({
        url: 'api/User/ResetPassword',
        method: Method.post,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
