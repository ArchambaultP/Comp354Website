import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ProductService} from "../../service/product.service";
import { Product } from '../../model/product';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute} from '@angular/router';
import {CartProduct} from '../../model/cartProduct';
import Cookies from 'js-cookie';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;
  public showSuccess = false;
  products: Product[];
  cartProducts: CartProduct[];
  userId;
  cookieValue = 'UNKNOWN';
  gst;
  qst;
  grandtotal;
  total;

  constructor(public productService: ProductService, private route: ActivatedRoute,private cookieService: CookieService,
  private auth: AuthService,private order: OrderService) {
  }

  ngOnInit() {
        if(this.auth.isUserLoggedIn()){ //if user is logged in
           this.userId = this.auth.currentUserId();

            this.cookieValue = Cookies.get('Cart');
            var cartItem;
            if(this.cookieValue !== undefined){

                cartItem = JSON.parse(this.cookieValue);
                var prodIds = cartItem.map(x => x.product.id);

                this.productService.findAllProducts().subscribe(data => {
                    var prods = [];
                    console.log(data);
                    for(var i =0;i< data.length; i++) //shitty loop to include what's in our cart to our product data
                    {
                        if(data[i].id === prodIds.find(element => element == data[i].id))
                            prods.push(data[i]);
                    }
                    this.setupCart(prods);
                    this.initConfig();
                });
            }
        }
  }

  setupCart(prods){
    this.cartProducts = JSON.parse(this.cookieValue);
    console.log(this.cartProducts);
  }

  updateQuantity(cartProd, quantity, event)
  {
    if (isNaN(quantity))
    {
        event.preventDefault();
        return;
    }

    for(var i=0;i<this.cartProducts.length;i++)
    {
        if(this.cartProducts[i].product.id === cartProd.product.id){
            this.cartProducts[i].quantity = quantity;
            Cookies.set('Cart', JSON.stringify(this.cartProducts));
            this.cookieValue = Cookies.get('Cart');
            this.cartProducts = JSON.parse(this.cookieValue);
        }
    }

    this.initConfig();
  }

   deleteFromCart(cartProd){

        var filtered = this.cartProducts.filter(function(el) { return el !==  cartProd});
        if(filtered.length === 0)
        {
            Cookies.remove('Cart');
            document.location.href="/";
        }
        else{

          Cookies.set('Cart', JSON.stringify(filtered));
          this.cookieValue = Cookies.get('Cart');
          this.cartProducts = JSON.parse(this.cookieValue);
        }

        this.initConfig();
   }

   private initConfig(): void {

         var itemTotal = 0;
         this.cartProducts.forEach(cp => itemTotal += parseFloat(cp.product.price)*parseFloat(cp.quantity));


         console.log(itemsFromCartProduct);

         this.total = itemTotal.toFixed(2);
         this.gst = (itemTotal*0.05).toFixed(2);
         this.qst = (itemTotal*.09975).toFixed(2);
         this.grandtotal = (itemTotal + itemTotal*0.05 + itemTotal*.09975).toFixed(2);

         //var itemTotalFormatted = this.total.toString();
         var itemTotalFormatted = this.grandtotal.toString();

         var itemsFromCartProduct = this.cartProducts.map(function(cp){
          var p = (parseFloat(cp.product.price) * 1.14975).toFixed(2);
           return {name: cp.product.name, quantity:cp.quantity, category: 'DIGITAL_GOODS', unit_amount:{ currency_code:'CAD', value: ''+p+''}} //quantity comes from cookie, set 1 default
         });
         var test =0;

         itemsFromCartProduct.forEach(x => test += parseFloat(x.unit_amount.value));
         console.log('price b4 tax');
         console.log(this.total);
         console.log('test');
         console.log(test);

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
                 }
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


           this.order.register(this.cartProducts)
               .subscribe
               (
                   data =>
                   {
                       //document.location.href="/";
                        //document.location.href="/orderComplete/"+data.id;
                        Cookies.set('order', data);
                        document.location.href="/orderComplete";
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
