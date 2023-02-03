import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchingValidatior: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('newPassword');
  const confirmPassword = control.get('confirmNewPassword');

  return password?.value === confirmPassword?.value
    ? null
    : { notmatched: true };
};
