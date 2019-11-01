import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
    public email: String;
    public password: String;

    constructor(private http: HttpClient){}

    login(credentials): Observable<any>{
        if(credentials != undefined){
            const body = new HttpParams()
                .set('email',credentials.email)
                .set('password',credentials.password);

            return this.http.post('http://localhost:8080/auth/login',
                 body.toString(),
                     {
                         headers: new HttpHeaders()
                             .set('Content-Type','application/x-www-form-urlencoded')
                     }
                 );
        }
    }

    register(credentials): Observable<any>{
        if(credentials != undefined){
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
        }
    }

    registerSuccessfulLogin(email, password){
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email);
    }

    logout(){
        sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        this.email = null;
        this.password = null;
    }

    currentUser(){
        const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user){
            return sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        }
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
        return user;
    }
}