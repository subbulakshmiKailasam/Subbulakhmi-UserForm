import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [
  {
 path: '',
 component:FileUploadComponent
  },
  
];
@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    FormsModule,CommonModule, RouterModule.forChild(routes) 
    
  ],
  
})
export class FileUploadModule { }
