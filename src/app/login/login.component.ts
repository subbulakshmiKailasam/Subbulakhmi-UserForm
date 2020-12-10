import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'  
user:any ={}
  constructor() {

  }

  ngOnInit(){

  }
  onFormSubmit(form:NgForm){

  }
  
 
}