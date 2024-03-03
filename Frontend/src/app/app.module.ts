import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,  // Add this line
    HttpClientModule,
    LoginPageComponent
  ]
})
export class AppModuleModule { }
