import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  loadding: boolean = false;
  error: string = '';
  constructor(
    private fb: FormBuilder,
    private _AuthService: AuthService,
    private _Router: Router
  ) {}
  RegisterForm: FormGroup = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ],
    // last_name: [
    //   '',
    //   [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    // ],
    // age: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.min(18),
    //     Validators.max(50),
    //     Validators.pattern('^[0-9]*$'),
    //   ],
    // ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[A-za-z]{8,}')]],
  });
  RegisterSubmitFrom(RegisterForm: FormGroup) {
    this.loadding = true;
    if (RegisterForm.valid) {
      this._AuthService.register(RegisterForm.value).subscribe({
        next: () => {
          this.loadding = false;
          this._Router.navigateByUrl('login');
        },
        error: (er) => {
          this.loadding = false;
          this.error = er.error.message;
        },
        complete: () => {},
      });
    }
  }

  get username() {
    return this.RegisterForm.get('username');
  }

  // get lastName() {
  //   return this.RegisterForm.get('last_name');
  // }

  // get age() {
  //   return this.RegisterForm.get('age');
  // }

  get email() {
    return this.RegisterForm.get('email');
  }

  get password() {
    return this.RegisterForm.get('password');
  }
}
