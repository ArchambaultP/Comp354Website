import { Component, Output, EventEmitter, OnInit, AfterContentInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping.component.html',
  styleUrls: [ './shipping.component.scss' ]
})
export class ShippingFormComponent implements OnChanges, OnInit {
 // @Input() user: User;
  @Output() formReady = new EventEmitter<FormGroup>()
  shippingForm: FormGroup;
  private country: string;
  private city: string;
  private address: string;
  private zip: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.shippingForm = this.fb.group({
      country: null,
      city: null,
      address: null,
      zip: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.shippingForm);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && !changes.user.firstChange) {
      this.shippingForm.patchValue({
        country: this.country,
        city: this.city,
        address: this.address,
        zip: this.zip
      });
    }
  }
}
