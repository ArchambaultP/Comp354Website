import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordUpdate } from '../password-update/password-update.component';

@Component({
  selector: 'email-verification',
  templateUrl: './email-verification.component.html'
})
export class EmailVerification implements OnInit{
    //Variables for modal reuse. Changes displayed text of some elements.
    @Input() modalTitle;
    @Input() codeName;
    @Input() submitBtn;
    email:string;
    code:string;
    eForm: FormGroup;
    errorMsg:string;
    successMsg:string;
    submitted = false;
    error;
    loading = false;

    constructor(private auth: AuthService, private http: HttpClient, private router: Router
            , private formBuilder: FormBuilder, public activeModal: NgbActiveModal,private modalService: NgbModal){
    }
    ngOnInit(){
     this.eForm =
                this.formBuilder.group({
                    email:['', [Validators.required,Validators.email]],
                    code:['',Validators.required]
                });
    }

    get form(){ return this.eForm.controls; }

     onSubmit(){
     this.loading = true;
     this.submitted = true;
     if(this.eForm.invalid){
        this.loading = false;
        this.error = true;
        return;
     }

     this.email = this.eForm.controls.email.value;
     this.code = this.eForm.controls.code.value;

     this.auth.confirmEmail(this.email,this.code)
        .subscribe
        (
            data =>
            {
                if(data['error']){
                    this.errorMsg = data['message'];
                    this.error = true;
                }else{
                    if(this.modalTitle == 'Account Recovery'){
                        const pwdModal = this.modalService.open(PasswordUpdate,{backdrop:'static'});
                        pwdModal.componentInstance.email = this.email;
                        this.activeModal.close('Verification Success');
                    }else if(this.modalTitle == 'Account Activation'){
                        this.successMsg = 'Account Successful Activated. Please Sign In.';
                        this.error = false;
                    }
                }
                this.loading = false;
            }
        );
     }
}