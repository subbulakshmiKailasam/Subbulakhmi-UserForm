import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserIdleService } from 'angular-user-idle';

import * as $ from 'jquery';
declare function richText(val) :any
@Component({
  selector: 'user-registration',
  templateUrl: './user.registration.component.html',
  styleUrls: ['../app.component.css']
})
export class UserRegistrationComponent implements OnInit {
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
user:any ={}
  isPwdNotMatched: boolean;
  constructor() {

  }

  ngOnInit(){
console.log('tesr')
  }
  checkpwd(){
    if(this.user.password != this.user.confirmpassword){
      this.isPwdNotMatched = true
    }
    else {
      this.isPwdNotMatched = false
    }
  }
  resetconfirmpwd(){
    this.user.confirmpassword =''
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