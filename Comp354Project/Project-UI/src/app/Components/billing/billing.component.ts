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

    ngOnInit(): void {
      if(this.auth.isUserLoggedIn()){ //if user is logged in
         this.userId = this.auth.currentUserId();
         this.cookieService.set('CartUser', this.userId);

          console.log(this.cookieService.get('Cart'));
          this.cookieValue = this.cookieService.get('Cart');
          var cartItem;
          if(this.cookieValue !== ''){

              cartItem = JSON.parse(this.cookieValue);
              var prodIds = cartItem.map(x => x.id);

              this.productService.findAllProducts().subscribe(data => {
                  var prods = [];
                  console.log(data);
                  for(var i =0;i< data.length; i++) //shitty loop to include what's in our cart to our product data
                  {
                      if(data[i].id === prodIds.find(element => element == data[i].id))
                          prods.push(data[i]);
                  }

                  this.products = prods;
                  this.initConfig();
              });
          }
      }
   }

    private initConfig(): void {

      var itemTotal = 0;
      console.log(this.products);
      this.products.forEach(prod => itemTotal += parseFloat(prod.price));

      var itemsFromProduct = this.products.map(function(product){
        return {name: product.name, quantity:1, category: 'DIGITAL_GOODS', unit_amount:{ currency_code:'CAD', value: ''+product.price+''}} //quantity comes from cookie, set 1 default
      });

      console.log(itemsFromProduct);
      var itemTotalFormatted = itemTotal.toString();

      this.payPalConfig = {
      currency: 'CAD',
      clientId: 'AdjTqjryHNG8fTKQ9eBoF6VIR_leNRmCcd2g8WSb5BrUxV3coof_Q9tetUkdrJhfiOhIRteU8p8d-jXa',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'CAD',
              value: ''+itemTotalFormatted+'',
              breakdown: {
                item_total: {
                  currency_code: 'CAD',
                  value: ''+itemTotalFormatted+''
                }
              }
            },
            items: itemsFromProduct
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
                    /*
                    if(!data['error']){
                        this.authUser = data;
                        this.auth.registerSuccessfulLogin(this.authUser);
                        this.successMsg = data['message'];
                        this.error = false;
                    }else{
                        this.errorMsg = data['message'];
                        this.error = true;
                    }*/

                    alert(data);
                }
            );

        this.showSuccess = true;
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
