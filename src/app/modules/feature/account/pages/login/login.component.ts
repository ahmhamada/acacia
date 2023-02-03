import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthLogicService } from 'src/app/modules/core/services/auth-logic/auth-logic.service';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';
import { LoginPayload } from '../../models/login-payload.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authLogicService: AuthLogicService, private navigationService: NavigationService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email') as FormControl
  }

  get password() {
    return this.loginForm.get('password') as FormControl
  }

  onLogin(form: FormGroup) {
    const payload: LoginPayload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authLogicService.login(form.value).subscribe(res => {
      this.navigationService.navigate(['/property'])
    });
  }

  get InputTypes() {
    return InputTypes
  }

}
