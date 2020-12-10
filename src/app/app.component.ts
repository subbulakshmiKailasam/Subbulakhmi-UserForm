import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserIdleService } from 'angular-user-idle';

import * as $ from 'jquery';
declare function richText(val) :any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
user:any ={}
  isPwdNotMatched: boolean;
  constructor() {

  }

  ngOnInit(){

  }
  
  onFormSubmit(form: NgForm) {
  
    if (form.invalid) {
       return;
    }
    this.user = form.value;
    form.resetForm(); 
  //  form.resetForm();
 }
 
}