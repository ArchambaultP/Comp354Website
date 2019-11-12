import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AuthenticatedUser } from '../model/authenticatedUser';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
    public email: String;
    public password: String;
    public emailValidationUrl = 'http://localhost:8080/account/email/';
    private authUser: AuthenticatedUser;
    private subject = new Subject<any>();

    constructor(private http: HttpClient){}

    sendMessage(message: string){
        this.subject.next({text: message});
    }

    clearMessages(){
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

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

    isEmailUnique(email:string): Observable<any> {
        return this.http.get(this.emailValidationUrl+email);
    }

    registerSuccessfulLogin(authUser: AuthenticatedUser){
       sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, authUser.email);
       sessionStorage.setItem("user",JSON.stringify(authUser));

       //Notifies components that need to be updated when authentication occurs.
       console.log('authenticated');
       this.sendMessage('authenticated');
    }

    logout(){
        sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem("user");
        this.email = null;
        this.password = null;

        //Notifies components that need to be updated when logout occurs.
        this.sendMessage('logout');
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