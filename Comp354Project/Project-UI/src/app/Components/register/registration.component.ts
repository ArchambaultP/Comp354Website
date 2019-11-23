import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { InputValidator } from '../../utilities/inputValidator';
import { AuthenticatedUser } from '../../model/authenticatedUser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
    private authUser: AuthenticatedUser;
    regForm: FormGroup;
    submitted = false;
    credentials =
    {
        email: '',
        password: '',
        name: '',
        address: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
        phone: ''
    };
    errorMsg: string;
    successMsg: string;
    error;
    errorPwdMsg = 'Passwords do not match';
    invalidPwd = false;

    //Variables for modal reuse. Changes displayed text of some elements.
    @Input() modalTitle;
    @Input() submitBtn;

    constructor(private auth: AuthService, private http: HttpClient, private router: Router
        , private formBuilder: FormBuilder, private iv: InputValidator, public activeModal: NgbActiveModal){
        if(this.auth.isUserLoggedIn() && !this.auth.isAdmin()){
        }
    }

    ngOnInit(){
        this.regForm =
            this.formBuilder.group({
                name:['', Validators.required],
                email:['', [Validators.required,Validators.email]],
                password:['', Validators.required],
                conPassword:['',Validators.required],
                address:[''],
                city:[''],
                province:[''],
                country:[''],
                postalCode:[''],
                phone:['']
            },
            {
                validator: [this.iv.confirmInput('password','conPassword'),this.iv.isEmailUnique('email')]
            });
    }

    get form(){ return this.regForm.controls; }

    onSubmit(){
        this.submitted = true;
        if(this.regForm.invalid){
            return;
        }
        this.credentials =
        {
            email: this.regForm.controls.email.value,
            password: this.regForm.controls.password.value,
            name: this.regForm.controls.name.value,
            address: this.regForm.controls.address.value,
            city: this.regForm.controls.city.value,
            province: this.regForm.controls.province.value,
            country: this.regForm.controls.country.value,
            postalCode: this.regForm.controls.postalCode.value,
            phone: this.regForm.controls.phone.value
        };

        this.auth.register(this.credentials)
            .subscribe
            (
                data =>
                {
                    //if(data['registrationSuccess'] != true){
                    if(!data['error']){
                        this.authUser = data;
                        this.auth.registerSuccessfulLogin(this.authUser);
                        this.successMsg = data['message'];
                        this.error = false;
                    }else{
                        this.errorMsg = data['message'];
                        this.error = true;
                    }
                }
            );


    }

}