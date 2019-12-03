import {Component, Input, OnInit} from '@angular/core';
import { products} from "../../products";
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from "../../service/product.service";
import {AuthService} from "../../service/auth.service";
import { Product } from '../../model/product';
import { CookieService } from 'ngx-cookie-service';
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   product: Product;
   ans: string;
   cookieValue = 'UNKNOWN';
   userId: string;
  constructor(private router: Router, public productService: ProductService,
              private route: ActivatedRoute,private cookieService: CookieService,
              private auth: AuthService, public searchService: SearchService) {
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

    deleteProduct() {
        //Make sure the user wants to delete the product
        if (confirm("Are you sure you want to delete this product?") == true) {

            this.productService.deleteProductById(this.product.id).subscribe(a => {
                this.ans = a;
            })
            this.searchService.searchText.next(" ");
            window.alert(this.product.name + " has been deleted!");
            this.router.navigate(['/products']);
        }
    }
}
