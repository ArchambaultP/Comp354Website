import { Injectable } from '@angular/core';
import { Product  } from '../model/product';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class OrderService {

  private productsUrl: string;
  private orderUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) { }

  public getAccountOrders(id:number): Observable<any> {
    return this.http.get(this.orderUrl+"/account-orders/"+id);
  }

  public getOrders(id:number): Observable<any> {
    return this.http.get(this.orderUrl+"/orders/"+id);
  }


    register(products): Observable<any>{
      /*  if(credentials != undefined){
            const body = new HttpParams()
                .set('email',credentials.email)
                .set('password',credentials.password)
                .set('name',credentials.name)
                .set('address',credentials.address)
                .set('city',credentials.city)
                .set('province',credentials.province)
                .set('country',credentials.country)
                .set('postalCode',credentials.postalCode)
                .set('phone',credentials.phone);

            return this.http.post('http://localhost:8080/auth/register',
                body.toString(),
                    {
                        headers: new HttpHeaders()
                            .set('Content-Type','application/x-www-form-urlencoded')
                    }
                );
        }*/

        console.log("REQUEST BODY");
        var prodIds = products.map(x => x.id);
        console.log(prodIds);
        const body = new HttpParams().set('products', JSON.stringify(products));
        console.log(body);
        return this.http.post('http://localhost:8080/order/add', prodIds, {headers: new HttpHeaders().set('Content-Type','application/json')});
    }
}

