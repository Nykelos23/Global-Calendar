import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {LogService} from "../log.service";
import { Observable } from 'rxjs';
import{User} from '../interface/user'

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url: string = "http://localhost:8080/app/user"
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  
  getUser(userId:number) : Observable<User> {
    return this.http.get<User>(this.url + "/" + userId + "");
  }
  
  
}
