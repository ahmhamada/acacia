import { LoginResponse } from '../../_models/login-response';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../_models/user';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { LoginPayload } from 'src/app/modules/feature/account/models/login-payload.model';
import { ResetPayload } from 'src/app/modules/feature/account/models/reset-payload.model';

@Injectable({
  providedIn: 'root',
})
export class AuthLogicService {
  private currentUserSubject: BehaviorSubject<User> | any;
  public currentUser!: Observable<User>;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('currentUser') as string)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(payload: LoginPayload) {
    return this.authService.login(payload).pipe(
      map((result: LoginResponse) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(result));
        localStorage.setItem('token', JSON.stringify(result.token));
        this.currentUserSubject.next(result);
        return result;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token') as string).token;
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  resetPassword(payload: ResetPayload) {
    return this.authService.resetPassword(payload).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
