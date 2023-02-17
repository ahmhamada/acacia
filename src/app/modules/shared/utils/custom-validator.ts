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

export function exceedValueValidator(controlName: string, compareToControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const controlValue = control.get(controlName)?.value;
    const compareToControlValue = control.get(compareToControlName)?.value;

    if (controlValue && compareToControlValue && controlValue > (compareToControlValue * 0.025)) {
      return { compareValuesPercentage: true };
    }

    return null;
  };
}

