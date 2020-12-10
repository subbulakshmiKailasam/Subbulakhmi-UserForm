import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import * as $ from 'jquery';
import { UserDetailService } from './user-details.service';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  users:any =[];
    
  constructor(private service:UserDetailService) {

  }

  ngOnInit(){
this.service.getUserData().subscribe((res:any)=>{
    this.users = res.data
})
  }
  
 
}