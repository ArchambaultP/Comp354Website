import {Component, Input, OnInit} from '@angular/core';
import { products} from "../../products";
import { ActivatedRoute} from '@angular/router';
import {ProductService} from "../../service/product.service";
import { Product } from '../../model/product';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // products = products;
  // product;
product: Product;
  constructor(public productService: ProductService, private route: ActivatedRoute,private cartService: CartService) {
  }

  //Looks for product in products array that has the productId that was passed to the component through the router
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productService.findProductById(params.get('id')).subscribe(p =>{
        this.product = p;
      })
    });
  }

  addToCart(product) {
    window.alert('Your item has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
