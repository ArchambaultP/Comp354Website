import {Component, Input, OnInit} from '@angular/core';
import { products} from "../../products";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products = products;
  product;

  constructor(private route: ActivatedRoute,) {
  }

  //Looks for product in products array that has the productId that was passed to the component through the router
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products.find(product => product.productId === parseInt(params.get('productId')));
    });
  }

  addToCart() {
    window.alert('Item added to cart');
  }
}