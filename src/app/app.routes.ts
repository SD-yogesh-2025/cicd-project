import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: Home },
  { path: '**', redirectTo: 'login' }
];