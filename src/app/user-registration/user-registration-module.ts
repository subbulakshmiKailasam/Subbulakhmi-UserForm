import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration.component';
const routes: Routes = [
  {
 path: '',
 component:UserRegistrationComponent
  },
  
];
@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    FormsModule,CommonModule, RouterModule.forChild(routes) 
    
  ],
  
})
export class UserRegistrationModule { }
