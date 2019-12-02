import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './email-request.component.html',
  styleUrls: ['./email-request.component.css']
})
export class EmailRequestComponent implements OnInit{
    errorMsg: string;
    successMsg: string;
    submitted = false;
    rForm: FormGroup;
    error = false;
    email: string;
    loading = false;

     constructor(private auth: AuthService, private http: HttpClient, private router: Router
                , private formBuilder: FormBuilder, public activeModal: NgbActiveModal){
     }

    ngOnInit(){
        this.rForm =
                this.formBuilder.group({
                    email:['', [Validators.required,Validators.email]]
                });
    }

    get form(){ return this.rForm.controls; }

    onSubmit(){
        this.submitted = true;
        this.loading = true;
        if(this.rForm.invalid){
            return;
        }

        this.email = this.rForm.controls.email.value;
        this.auth.isEmailUnique(this.email)
            .subscribe(
                data =>{
                    //backward use of this function to ensure there is an account existing with such email.
                    if(data['valid'] == false){
                        this.error = false;
                        this.auth.sendEmailConfirmation(this.email,'resetpassword')
                            .subscribe(
                                data =>
                                {
                                    if(data['success'] == true){
                                        this.successMsg = data['message'];
                                    }else{
                                        this.errorMsg = data['message'];
                                        this.error = true;
                                    }
                                    this.loading = false;
                                });
                    }
                });
    }
}