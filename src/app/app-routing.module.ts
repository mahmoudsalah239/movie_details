import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './services/auth.guard';
import { PepoleComponent } from './components/pepole/pepole.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'movies', component: MoviesComponent, canActivate: [authGuard] },
  { path: 'people', component: PepoleComponent, canActivate: [authGuard] },
  { path: 'tvShows', component: TvShowsComponent, canActivate: [authGuard] },
  {
    path: 'moviedetails/:id',
    component: MoviedetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('../setting/setting.module').then((m) => m.SettingModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  
  exports: [RouterModule],
})
export class AppRoutingModule {}
