import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserIdleModule } from 'angular-user-idle';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app.module.route';


@NgModule({
  declarations: [
    AppComponent,CompileDirective
  ],
  imports: [
    BrowserModule, FormsModule,CommonModule,AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
