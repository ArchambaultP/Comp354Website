import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
    credentials =
    {
        email: '',
        password: '',
        conPassword: '',
        name: '',
        address: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
        phone: ''
    };
    errorPwdMsg = 'Passwords do not match';
    invalidPwd = false;

    constructor(private auth: AuthService, private http: HttpClient, private router: Router){
        if(this.auth.isUserLoggedIn()){
            this.router.navigate(['/']);
        }
    }

    ngOnInit(){}

    onSubmit(){
        if(!this.confirmPwd()){
            return;
        }
        this.auth.register(this.credentials)
            .subscribe
            (
                data =>
                {
                    if(data['registrationSuccess'] == true){
                        this.auth.registerSuccessfulLogin(this.credentials.email,this.credentials.password);
                        this.router.navigate(['/']);
                    }
                }
            );


    }

    confirmPwd(){
        if(this.credentials.password != this.credentials.conPassword){
            this.invalidPwd = true;
            return false;
        }
        return true;
    }

}