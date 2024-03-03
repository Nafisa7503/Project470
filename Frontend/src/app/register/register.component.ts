import { Component, OnInit } from '@angular/core';
import { Register } from './register.module'; // Adjust the import path
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Use 'styleUrls' instead of 'styleUrl'
})
export class RegisterComponent implements OnInit {
  register = new Register();

  constructor() {}

  ngOnInit(): void {}

  registerUser() {
    console.log(this.register);
  }
}
