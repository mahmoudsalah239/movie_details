import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  username: any;
  constructor(private _Auth: AuthService) {}
  ngOnInit(): void {
    this._Auth.userData.subscribe((res) => {
      if (this._Auth.userData.getValue() != null) {
        this.username = res?.['userName'];
        console.log(this.username);
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  logOut() {
    this._Auth.logOut();
  }
}
