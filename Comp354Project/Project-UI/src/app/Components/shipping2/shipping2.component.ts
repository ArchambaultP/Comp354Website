import { Component, OnInit } from '@angular/core';
import { ShippingFormModel } from '../../model/shipping';


@Component({
  selector: 'app-shipping2',
  templateUrl: './shipping2.component.html',
  styleUrls: ['./shipping2.component.css']
})
export class ShippingPage{
  public cartflag:boolean= false;
  constructor(
      public shipping:ShippingFormModel
  ){

  }

  ngOnInit(){
    this.ref();
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
      this.cartflag = true;
    }, 10 )
  }

}
