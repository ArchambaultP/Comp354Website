import { Injectable } from '@angular/core';
import { Product  } from '../model/product';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

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

      register(products): Observable<any>{
          console.log("REQUEST BODY");
          var prodIds = products.map(x => x.product.id);
          const body = new HttpParams().set('products', JSON.stringify(products));
          return this.http.post('http://localhost:8080/order/add', prodIds, {headers: new HttpHeaders().set('Content-Type','application/json')});
      }
}
