
import {Component, Input, OnInit} from '@angular/core';
import { products} from "../../products";
import { ActivatedRoute} from '@angular/router';
import {ProductService} from "../../service/product.service";
import { Product } from '../../model/product';

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

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products.find(product => product.productId === parseInt(params.get('productId')));
    });
  }

  addToCart() {
    window.alert('Item added to cart');
  }
}