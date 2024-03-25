import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule here
//import { TravelPackageComponent } from './travel-package/travel-package.component';
//import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    //TravelPackageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule // Include ReactiveFormsModule here
  ],
  exports: [
    //TravelPackageComponent,
    //ProfileComponent
  ]
})
export class AppModule { }
