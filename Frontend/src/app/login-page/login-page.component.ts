import { Component, OnInit } from '@angular/core';
import { Login } from './login-page.module'; // Adjust the import path
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login = new Login();

  constructor() {}

  ngOnInit(): void {}

  loginUser() {
    console.log(this.login);
  }
}

function page() {
  throw new Error('Function not implemented.');
}
