import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDetailService } from './user-details.service';


const routes: Routes = [
  {
 path: '',
 component:UserDetailsComponent
  },
  
];
@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
   HttpClientModule, FormsModule,CommonModule, RouterModule.forChild(routes) 
    
  ],
  providers:[UserDetailService]
  
})
export class UserDetailsModule { }
