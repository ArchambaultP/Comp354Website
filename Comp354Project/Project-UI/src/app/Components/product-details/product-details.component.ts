import {Component, Input, OnInit} from '@angular/core';
import { products} from "../../products";
import { ActivatedRoute} from '@angular/router';
import {ProductService} from "../../service/product.service";
import {AuthService} from "../../service/auth.service";
import { Product } from '../../model/product';
import { CookieService } from 'ngx-cookie-service';
import {CartProduct} from '../../model/cartProduct';
import Cookies from 'js-cookie';


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
   isLoggedIn = false;
   cartProd: CartProduct;
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
       this.isLoggedIn = true;
        this.cookieValue = Cookies.get('Cart');
    }
  }

  addToCart(){

    var cartVal = this.cookieValue = Cookies.get('Cart');
    var cartArray;
    console.log(Cookies.get('Cart'));
    if(cartVal !== undefined)
        cartArray = JSON.parse(cartVal);

     console.log(cartVal);

    if(cartVal === undefined) //empty cart
    {
        //have to set cookies for every page we need to access their value
        this.cartProd = {'product': this.product, 'quantity':'1'};//new CartProduct(this.product,1);
        Cookies.set('Cart', JSON.stringify([this.cartProd]));
        this.cookieValue = Cookies.get('Cart');
        alert('Product added to cart !');
        console.log('product added to cart');
    }
    else
    {
        var insert = true;

        for(var i =0;i < cartArray.length; i++)
        {
            if(cartArray[i].product.id === this.product.id)
                insert = false;
        }

        if(insert)
        {
            this.cartProd = {'product': this.product, 'quantity':'1'};
            cartArray.push(this.cartProd);
            Cookies.set('Cart', JSON.stringify(cartArray));
            this.cookieValue = Cookies.get('Cart');
            alert('Product added to cart !');
            console.log('Product added to cart');
        }
        else
        {
            alert('This product is already in your cart !');
            console.log('duplicate');
        }
    }

   }

}
