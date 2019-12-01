import {Component, Input, OnInit} from '@angular/core';
import { products} from "../../products";
import { ActivatedRoute} from '@angular/router';
import {ProductService} from "../../service/product.service";
import {AuthService} from "../../service/auth.service";
import { Product } from '../../model/product';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // products = products;
  // product;
   product: Product;
   ans: string;
   cookieValue = 'UNKNOWN';
   userId;
   product: Product;
  constructor(public productService: ProductService, private route: ActivatedRoute,private cookieService: CookieService, private auth: AuthService) {
  }

  //Looks for product in products array that has the productId that was passed to the component through the router
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productService.findProductById(params.get('id')).subscribe(p =>{
        this.product = p;
      })

      // test code to make sure it works on the front-end
      //this.productService.deleteProductById(params.get('id')).subscribe(a => {
      //  this.ans = a;
      //})

    });

    if(this.auth.isUserLoggedIn()){ //if user is logged in
       this.userId = this.auth.currentUserId();
       this.cookieService.set('CartUser', this.userId);

        this.cookieValue = this.cookieService.get('Cart');
    }
  }

  addToCart(){

    var cartVal = this.cookieValue = this.cookieService.get('Cart');
    var cartArray;
    if(cartVal !== '')
        cartArray = JSON.parse(cartVal);

    if(cartVal === '') //empty cart
    {
        //have to set cookies for every page we need to access their value
        this.cookieService.set( 'Cart', JSON.stringify([{'id':this.product.id, 'quantity':1}])); //set the cookie for prod detail page
        this.cookieService.set( 'Cart', JSON.stringify([{'id':this.product.id, 'quantity':1}]), 100, '/cartpage'); //set the cookies for the cartpage
        this.cookieService.set( 'Cart', JSON.stringify([{'id':this.product.id, 'quantity':1}]), 100, '/billing'); //set the cookies for the cartpage
        this.cookieService.set( 'Cart', JSON.stringify([{'id':this.product.id, 'quantity':1}]), 100, '/review'); //set the cookies for the cartpage
        this.cookieValue = this.cookieService.get('Cart');
        console.log('product added to cart')
    }
    else
    {
        var insert = true;

        for(var i =0;i < cartArray.length; i++)
        {
            if(cartArray[i].id === this.product.id)
                insert = false;
        }

        if(insert)
        {
            cartArray.push({'id':this.product.id, 'quantity':1});
            this.cookieService.set('Cart', JSON.stringify(cartArray));
            this.cookieService.set('Cart', JSON.stringify(cartArray), 100, '/cartpage');
            this.cookieService.set('Cart', JSON.stringify(cartArray), 100, '/billing');
            this.cookieService.set('Cart', JSON.stringify(cartArray), 100, '/review');
            this.cookieValue = this.cookieService.get('Cart');
            console.log('Product added to cart');
        }
        else
        {
            console.log('duplicate');
        }
    }

   }

}
