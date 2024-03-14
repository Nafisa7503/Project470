import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "", component: HomepageComponent},
    {path: "login",component: LoginComponent}
];
