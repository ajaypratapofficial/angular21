import { AbstractControl, ValidationErrors } from "@angular/forms";

export function forbiddenUsername(
  control: AbstractControl,
): ValidationErrors | null {
  if (control.value === "admin") {
    return {
      forbiddenUsername: true,
    };
  }

  return null;
}

