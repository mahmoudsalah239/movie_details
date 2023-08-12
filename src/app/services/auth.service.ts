import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token')) {
      this.saveUserData();
    }
  }

  register(formdata: any): Observable<any> {
    return this._HttpClient.post('http://127.0.0.1:8088/signUp', formdata);
  }
  login(formdata: any): Observable<any> {
    return this._HttpClient.post('http://127.0.0.1:8088/login', formdata);
  }
  saveUserData() {
    let token = JSON.stringify(localStorage.getItem('token'));
    this.userData.next(jwtDecode(token));
    console.log(this.userData);
  }
  logOut() {
    localStorage.removeItem('token');
    this.userData.next(null);
    this._Router.navigate(['login']);
  }

  // logoutAfter10sec() {
  //   this.userData.subscribe(() => {
  //     if (this.userData.getValue() != null) {
  //       setInterval(() => {
  //         this.logOut();
  //         console.log('logout');
  //       }, 2000);
  //     }
  //   });
  // }
}
