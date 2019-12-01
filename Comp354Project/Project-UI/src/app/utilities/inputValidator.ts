import { FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class InputValidator{

    constructor(private auth: AuthService){}

    confirmInput(controlName: string,confirmControlName: string){
        return ( formGroup: FormGroup) =>{
            const control = formGroup.controls[controlName];
            const confirmControl = formGroup.controls[confirmControlName];

            if(confirmControl.errors && !confirmControl.errors.mustMatch){
                return;
            }

            if(control.value !== confirmControl.value){
                confirmControl.setErrors({ mustMatch: true });
            }else{
                confirmControl.setErrors(null);
            }
        }
    }

    isEmailUnique(controlName: string){
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];

            if(control.errors && !control.errors.notUnique){
                return;
            }

            this.auth.isEmailUnique(control.value)
                .subscribe
                    (data =>
                        {
                            if(data['valid'] == false){
                                control.setErrors({ notUnique: true});
                            }else{
                                control.setErrors(null);
                            }
                        }
                    );


        }
    }
}
export function emailValidation(){
    return (control: AbstractControl) =>{
        let emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(emailPattern.test(control.value)){
            return null
        }else{
            return {emailErr : true}
        }

    }
}

export function len(len){
    return (control: AbstractControl) => {
        if( control.value && control.value.length>=len){
            return null;
        }else{
            return { minLength: true }
        }
    }
}

export function numeric(){
    return (control: AbstractControl) => {
        if(parseInt(control.value)){
            return null;
        }else{
            return { numeric: true }
        }
    }
}
