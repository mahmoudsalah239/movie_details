import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'role', component: RoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
