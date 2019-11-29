import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { InputValidator } from '../../../utilities/inputValidator';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'password-update',
  templateUrl: './password-update.component.html'
})
export class PasswordUpdate implements OnInit{
    @Input() email;
    errorMsg: string;
    successMsg: string;
    submitted = false;
    pForm: FormGroup;
    pwd: string;
    error = false;
    loading = false;

     constructor(private auth: AuthService, private http: HttpClient, private router: Router
                , private formBuilder: FormBuilder, private iv: InputValidator, public activeModal: NgbActiveModal){
     }

    ngOnInit(){
        this.pForm =
                this.formBuilder.group({
                    password:['', Validators.required],
                    conPassword:['',Validators.required]
                },
                 {
                     validator: [this.iv.confirmInput('password','conPassword')]
                 }
        );
    }

    get form(){ return this.pForm.controls; }

    onSubmit(){
        this.loading = true;
        this.submitted = true;
        if(this.pForm.invalid){
            this.loading = false;
            this.error = true;
            return;
        }

        this.pwd = this.pForm.controls.password.value;
        this.auth.changePassword(this.email,this.pwd)
            .subscribe
            (data =>
            {
                if(data['error'])
                {
                    this.errorMsg = data['message'];
                    this.error = true;
                }else{
                    this.successMsg = data['message'];
                    this.error = false;
                }
                this.loading = false;
            }
            );
    }
}