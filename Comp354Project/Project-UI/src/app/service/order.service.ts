import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) { }

  public getAccountOrders(id:number): Observable<any> {
    return this.http.get(this.orderUrl+"/account-orders/"+id);
  }

  public getOrders(id:number): Observable<any> {
    return this.http.get(this.orderUrl+"/orders/"+id);
  }
}
