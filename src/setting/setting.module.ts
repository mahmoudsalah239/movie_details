import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { RoleComponent } from './role/role.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PasswordComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
