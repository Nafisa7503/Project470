import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;

  constructor(){
    this.loginObj= new Login();
  }
  
}

export class Login{
    email: string;
    password:string;
    constructor(){
      this.email='';
      this.password=''
  }
}
