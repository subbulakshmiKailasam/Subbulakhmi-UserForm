import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import {Injectable} from "@angular/core";

@Injectable()
export class UserDetailService {
    
constructor(private http:HttpClient){

}
getUserData(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
}
}
