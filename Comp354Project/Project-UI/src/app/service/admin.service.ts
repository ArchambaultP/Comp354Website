import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Account } from '../model/account';
import { Observable } from 'rxjs/Observable';
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private accountsUrl = 'http://localhost:8080/admin/accounts';
  private account:Account;

  constructor(private http: HttpClient) {
  }

  public getAccounts(): Observable<any> {
    return this.http.get(`${this.accountsUrl}`);
  }

  public getAccount(id:number): Observable<any> {
    return this.http.get(`${this.accountsUrl}/${id}`);
  }

  public deleteAccount(id:number): Observable<Object> {
    return this.http.delete(`${this.accountsUrl}/${id}`);
  }

  public createAccount(account:Account): Observable<Object> {
    //'Access-Control-Allow-Origin', 'http://localhost:4200'
    return this.http.post(`${this.accountsUrl}`, account);
  }

  public updateAccount(id:number, value:any): Observable<Object>{
    return this.http.put(`${this.accountsUrl}/${id}`, value);
  }

  setter(account:Account){
    this.account = account;
  }

  getter(){
    return this.account;
  }
}
