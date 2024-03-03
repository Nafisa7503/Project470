import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginPageComponent},
];