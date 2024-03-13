import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name=""
  email=""
  contact=""
  password=""

  constructor(private http: HttpClient)
  {}

  register(){
   let data = {"name": this.name, "email": this.email, "contact": this.contact, "password": this.password}
   this.http.post("http://localhost:8000/api/register",data).subscribe((resultData: any)=> 
    {

        console.log(resultData)
        // this.router.navigate(['/login'])

    });
  }
}
