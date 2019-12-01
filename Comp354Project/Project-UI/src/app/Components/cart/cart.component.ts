import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ProductService} from "../../service/product.service";
import { Product } from '../../model/product';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];
  userId;
  cookieValue = 'UNKNOWN';
  constructor(public productService: ProductService, private route: ActivatedRoute,private cookieService: CookieService, private auth: AuthService) {
  }

  ngOnInit() {
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
                });
            }
        }

        console.log(this.products); //if you have items in the cart, products will contain them
  }

}
