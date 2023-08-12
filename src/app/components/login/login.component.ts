import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loadding: boolean = false;
  error: string = '';
  constructor(
    private fb: FormBuilder,
    private _AuthService: AuthService,
    private _router: Router
  ) {}
  ngOnInit(): void {

  }
  LoginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get email() {
    return this.LoginForm.get('email');
  }
  get password() {
    return this.LoginForm.get('password');
  }
  SubmitLoginForm(LoginForm: FormGroup) {
    this.loadding = true;
    if (LoginForm.valid) {
      this._AuthService.login(LoginForm.value).subscribe({
        next: (res) => {
          this.loadding = false;
          console.log(res.token);
          localStorage.setItem('token', res.token);
          this._AuthService.saveUserData();
          this._router.navigate(['home']);
        },
        error: (er) => {
          this.loadding = false;
          console.log(er);
          this.error = er.error.message;
        },
      });
    }
  }
}
