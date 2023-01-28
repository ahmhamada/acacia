import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['a@a.com', [Validators.required, Validators.email]],
      password: ['asdsad', [Validators.required]]
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
    console.log(form)
  }

  get InputTypes() {
    return InputTypes
  }

}
