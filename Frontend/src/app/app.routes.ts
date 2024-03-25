import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
//import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherFactorsComponent } from './weather-factors/weather-factors.component';
//import { TravelPackageComponent } from './travel-package/travel-package.component';
import { AttractionsComponent } from './attractions/attractions.component';


export const routes: Routes = [
    {path: "register", component: RegisterComponent},
    //{path: "", component: HomepageComponent},
    {path: "login",component: LoginComponent},
    {path: "profile", component: ProfileComponent},
    { path: 'weather-factors', component: WeatherFactorsComponent },
    //{path: "travel-package", component: TravelPackageComponent},
    {path: "attractions", component: AttractionsComponent}
];
