import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Account } from '../model/account';
import { Observable } from 'rxjs/Observable';
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUrl: string;
  private account:Account;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080/admin';
  }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl+'/accounts');
  }

  public getAccount(id:number): Observable<Account> {
    return this.http.get<Account>(this.accountsUrl+'/account/'+id);
  }

  public deleteAccount(id:number): Observable<Account> {
    return this.http.delete<Account>(this.accountsUrl+'/account/'+id);
  }

  public createAccount(account: Account): Observable<any> {
    //return this.http.post(this.accountsUrl+'/account', account).pipe(map((response: Response) => response.json()));
    //return this.http.post<Account>(this.accountsUrl+'/account', account, httpOptions);
    return this.http.post(this.accountsUrl+'/account', account);
  }

  public updateAccount(account: Account): Observable<any>{
    //return this.http.put(this.accountsUrl+'/account', account).pipe(map((response: Response) => response.json()));
    //return this.http.put<Account>(this.accountsUrl+'/account', account, httpOptions);
    return this.http.put(this.accountsUrl+'/account', account);
  }

  setter(account:Account){
    this.account=account;
  }

  getter(){
    return this.account;
  }
}
