import { FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';

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
