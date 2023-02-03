import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthLogicService } from 'src/app/modules/core/services/auth-logic/auth-logic.service';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';
import { passwordMatchingValidatior } from 'src/app/modules/shared/utils/custom-validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authLogicService: AuthLogicService,
    private navigationService: NavigationService
  ) {
    this.forgotForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required]],
        confirmNewPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchingValidatior }
    );
  }

  ngOnInit(): void {}

  onForgot(form: FormGroup) {
    this.authLogicService
      .resetPassword(form.value)
      .subscribe((res) => {
        this.navigationService.navigate(['/login']);
      });
  }

  formControl(key: string) {
    return this.forgotForm?.get(key) as FormControl;
  }

  get forgotFormError() {
    if (this.forgotForm?.errors) {
      return this.forgotForm.errors['notmatched'];
    }
  }

  get InputTypes() {
    return InputTypes;
  }

  // get passwordMatchError() {
  //   return (
  //     this.forgotForm.getError('mismatch') &&
  //     this.profileForm.get('confirmPassword')?.touched
  //   );
  // }
}
