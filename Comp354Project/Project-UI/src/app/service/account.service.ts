import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';
import { Observable } from 'rxjs/Observable';

/*
@Injectable({
  providedIn: 'root'
})
 */
@Injectable()
export class AccountService {

  private accountsUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080/admin/accounts';
  }

  public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl);
  }

  // public save(account: Account) {
  //   return this.http.post<Account>(this.accountsUrl, account);
  // }
}
