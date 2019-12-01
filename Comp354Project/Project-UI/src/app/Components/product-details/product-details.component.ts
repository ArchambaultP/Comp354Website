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
    });

    if(this.auth.isUserLoggedIn()){ //if user is logged in
       this.userId = this.auth.currentUserId();
       this.cookieService.set('CartUser', this.userId);

        this.cookieValue = this.cookieService.get('Cart');
        console.log(JSON.parse(this.cookieValue));
    }
  }

  addToCart(){

    var cartVal = this.cookieValue = this.cookieService.get('Cart');
    var cartArray = JSON.parse(cartVal);
    if(cartVal === '') //empty cart
    {
        this.cookieService.set( 'Cart', JSON.stringify([{'id':this.product.id, 'quantity':1}]));
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
        }
        else
        {
            console.log('duplicate');
        }
    }

   }

}
