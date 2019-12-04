import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { products} from "../../products";
import { ActivatedRoute} from '@angular/router';
import {ProductService} from "../../service/product.service";
import { Product } from '../../model/product';
import { OrderService } from '../../service/order.service';
import { CookieService } from 'ngx-cookie-service';
import {AuthService} from "../../service/auth.service";
import { CartProduct } from '../../model/cartProduct';
import Cookies from 'js-cookie';

@Component({
    selector: 'billing-form',
    templateUrl: './billing.component.html',
    styleUrls: [ './billing.component.css' ]
})
export class BillingFormComponent implements OnInit {

  constructor(public productService: ProductService, private route: ActivatedRoute,private cookieService: CookieService,
  private auth: AuthService, private order: OrderService) {
  }

    public payPalConfig?: IPayPalConfig;
    public showSuccess = false;
    userId;
    cookieValue = 'UNKNOWN';
    products: Product[];
    cartProducts: CartProduct[];

    ngOnInit(): void {
      if(this.auth.isUserLoggedIn()){ //if user is logged in
         this.userId = this.auth.currentUserId();

          this.cookieValue = Cookies.get('Cart');
          console.log(JSON.parse(this.cookieValue));
          if(this.cookieValue !== undefined){
              this.cartProducts = JSON.parse(this.cookieValue);
              var prods = this.cartProducts.map(x => x.product);

              this.products = prods;
              this.initConfig();
          }
      }
   }

    private initConfig(): void {

      var itemTotal = 0;
      this.cartProducts.forEach(cp => itemTotal += parseFloat(cp.product.price)*parseFloat(cp.quantity));

      var itemsFromCartProduct = this.cartProducts.map(function(cp){
        return {name: cp.product.name, quantity:cp.quantity, category: 'DIGITAL_GOODS', unit_amount:{ currency_code:'CAD', value: ''+cp.product.price+''}} //quantity comes from cookie, set 1 default
      });

      console.log(itemsFromCartProduct);
      var itemTotalFormatted = itemTotal.toFixed(2).toString();
      console.log(itemTotalFormatted);
      this.payPalConfig = {
      currency: 'CAD',
      clientId: 'AdjTqjryHNG8fTKQ9eBoF6VIR_leNRmCcd2g8WSb5BrUxV3coof_Q9tetUkdrJhfiOhIRteU8p8d-jXa',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'CAD',
              value: itemTotalFormatted,
              breakdown: {
                item_total: {
                  currency_code: 'CAD',
                  value: itemTotalFormatted
                }
              },
            },
            items: itemsFromCartProduct
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);


        this.order.register(this.products)
            .subscribe
            (
                data =>
                {
                    document.location.href="/";

                }
            );

        this.showSuccess = true;
        //REDIRECT HERE
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
    }

}
