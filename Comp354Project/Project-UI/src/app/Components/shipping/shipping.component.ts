import { Component, Output, EventEmitter, OnInit, AfterContentInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticatedUser } from '../../model/authenticatedUser';

@Component({
    selector: 'shipping-form',
    templateUrl: './shipping.component.html',
    styleUrls: [ './shipping.component.css' ]
})
export class ShippingFormComponent implements /*OnChanges,*/ OnInit {
    @Input() user: AuthenticatedUser;
    @Output() formReady = new EventEmitter<FormGroup>()
    shippingForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        console.log("entering shipping page");
        this.shippingForm = this.fb.group({
            Name: null,
            country: null,
            city: null,
            address: null,
            zip: null,
            phonenumber: null,
        });

        // Emit the form group to the father to do whatever it wishes
        this.formReady.emit(this.shippingForm);
    }

    /*ngOnChanges(changes: SimpleChanges) {
        if (changes.user && !changes.user.firstChange) {
            this.shippingForm.patchValue({
                country: this.user.country,
                city: this.user.city,
                address: this.user.address,
                zip: this.user.zip
            })
        }
    }*/
}
