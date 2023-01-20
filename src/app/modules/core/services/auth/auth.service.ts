import { Injectable } from '@angular/core';
import { Method } from '../../enums/method.enum';
import { XhrService } from '../xhr/xhr.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private xhrService: XhrService) { }

  login(email: string, password: any) {
    return this.xhrService.call({
      url: 'api/Authenticate/login1',
      method: Method.post,
      body: {
        "Username": email,
        "Password": password
      }
    }).pipe(map(res => {
      return res;
    }));
  }

  getUserData(loginId: string) {
    return this.xhrService.call({
      url: `api/Users/getuserdata${loginId}`,
      method: Method.get,
      body: {}
    }).pipe(map(res => {
      return res;
    }));
  }


}
