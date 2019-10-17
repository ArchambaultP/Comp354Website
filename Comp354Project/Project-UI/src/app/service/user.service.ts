import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/getemployees';
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }

  // public save(user: User) {
  //   return this.http.post<User>(this.usersUrl, user);
  // }
}
