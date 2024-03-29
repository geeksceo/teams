import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient,
  ) { }


  getUser(): Observable<User> {
    return this.http.get<User>("http://localhost:9090/api/v1/users/1/teams");
  }

  getTeams(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9090/api/v1/users/1/teams");
  }
}
