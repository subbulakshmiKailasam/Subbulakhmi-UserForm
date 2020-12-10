import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
 path: '',
 component:LoginComponent
  },
  
];
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,CommonModule, RouterModule.forChild(routes) 
    
  ],
  
})
export class LoginModule { }
