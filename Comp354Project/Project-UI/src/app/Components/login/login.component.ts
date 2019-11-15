import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticatedUser } from '../../model/authenticatedUser';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    credentials = {email: '', password: ''};
    email: string;
    password: string;
    errorMsg: string;
    successMsg: string;
    invalidLogin = false;
    loginSuccess = false;
    authUser: AuthenticatedUser;

    constructor(private auth: AuthService, private http: HttpClient, private router: Router){
        if(this.auth.isUserLoggedIn()){
            console.log('user: '+this.auth.isUserLoggedIn());
            this.router.navigate(['/']);
        }
    }

    ngOnInit(){}

   onSubmit(){
        this.auth.login(this.credentials)
            .subscribe
            (
                data =>
                    {
                        if(!data['error']){
                            this.authUser = data;
                            this.auth.registerSuccessfulLogin(this.authUser);
                            this.loginSuccess = true;
                            this.router.navigate(['/']);
                        }else{
                            this.errorMsg=data['error'];
                            this.invalidLogin= true;
                        }
                    }
            );


   }
}