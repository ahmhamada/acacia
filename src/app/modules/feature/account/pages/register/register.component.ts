import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthLogicService } from 'src/app/modules/core/services/auth-logic/auth-logic.service';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  // roleTypes$: any = this.authLogicService.getRoles();

  constructor(
    private fb: FormBuilder,
    private authLogicService: AuthLogicService
  ) {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      // role: [null, Validators.required],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  // get role() {
  //   return this.registerForm.get('role') as FormControl;
  // }
  ngOnInit(): void {}

  onRegister(form: FormGroup) {
    console.log(form);
  }
  get InputTypes() {
    return InputTypes;
  }
}
