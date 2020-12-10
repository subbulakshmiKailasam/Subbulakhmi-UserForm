import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserIdleModule } from 'angular-user-idle';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationModule } from './user-registration/user-registration-module';

const routes: Routes = [
  {
 path: 'user-registration',
 
 loadChildren: './user-registration/user-registration-module#UserRegistrationModule'
  },
  {
      path:'login',
      loadChildren: './login/login.module#LoginModule'
  },
  {
    path:'user-details',
    loadChildren: './user-details/user-details.module#UserDetailsModule'
},
{
    path:'file-upload',
    loadChildren: './file-upload/file-upload.module#FileUploadModule'
}
  
];
@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes) 
    
  ],
   exports: [
    RouterModule
  ]
  
})
export class AppRoutingModule { }
