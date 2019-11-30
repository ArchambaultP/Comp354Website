import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  public customerDetails: any = {};
  public checkOutFlag: any = {};
  public invoiceDate: any = new Date();
  public invoiceNo: any = Math.floor(Math.random() * 10000);

  @Input("allProductList") __allprdts: any = {};

  constructor(
      public cart: CartService,
      public storage: StorageService
  ) {

  }

  ngOnInit() {
    this.customerDetails = this.cart.loadCheckoutInfo('customerInfo');
    this.cart.allItems = this.__allprdts;
    this.cart.listCartItems();
    this.checkOutFlag = JSON.parse(this.storage.get('mycart'));

  }

  clearCart() {
    let temp = {};
    localStorage.setItem(this.storage.storageName, JSON.stringify(temp));

    //this.checkOutFlag = Object.keys(this.storage.get()).length;
    //console.log(this.checkOutFlag)
    document.location.href = '/products';
  }

  print() {
    let temp = {};
    localStorage.setItem(this.storage.storageName, JSON.stringify(temp));
    window.focus();
    window.print();
  }
}

