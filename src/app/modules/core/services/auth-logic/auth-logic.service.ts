import { LoginResponse } from '../../_models/login-response';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../_models/user';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLogicService {
  private userSubject: BehaviorSubject<User> | any = new BehaviorSubject<any>({});
  public user!: Observable<User>;

  constructor(private authService: AuthService, private router: Router) { }

  getUserData(loginId: any) {
    return this.authService.getUserData(loginId).pipe(map((result) => {
      if (result) {
        localStorage.setItem('userData', JSON.stringify(result));
      }
      return result;
    }))
  }

  login(email: string, password: any) {
    return this.authService.login(email, password).pipe(map((result: LoginResponse) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', JSON.stringify(result.token));
      return result;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    this.resetLocalStorage()
    // this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  resetLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token') as string).token;
  }

  // roles
  get userValue(): User {
    return this.userSubject.value;
  }

}
