import { Component, OnInit } from '@angular/core';
  import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
  import { products} from "../../products";
  import { ActivatedRoute} from '@angular/router';
  import {ProductService} from "../../service/product.service";
  import { Product } from '../../model/product';
  import { OrderService } from '../../service/order.service';

  @Component({
    templateUrl: './paypal.component.html',
  })
  export class PaypalComponent implements OnInit {

  constructor(public productService: ProductService, private route: ActivatedRoute, private order: OrderService) {
  }

    public payPalConfig?: IPayPalConfig;
    public showSuccess = false;
    products: Product[];

    ngOnInit(): void {
      this.initConfig();
    this.productService.findAllProducts().subscribe(data => {
     this.products = data;
     console.log(data);
    });
    }

    private initConfig(): void {
      this.payPalConfig = {
      currency: 'CAD',
      clientId: 'AdjTqjryHNG8fTKQ9eBoF6VIR_leNRmCcd2g8WSb5BrUxV3coof_Q9tetUkdrJhfiOhIRteU8p8d-jXa',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'CAD',
              value: '0.99',
              breakdown: {
                item_total: {
                  currency_code: 'CAD',
                  value: '0.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'CAD',
                  value: '0.99',
                },
              }
            ]
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