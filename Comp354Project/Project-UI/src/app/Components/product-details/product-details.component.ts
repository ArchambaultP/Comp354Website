
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
<<<<<<< HEAD
=======
    
>>>>>>> products organized in a row and display filter working

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //params.get('productID') gets productId from the route
      this.product = products[+params.get('productId') - 1];
    });
  }
<<<<<<< HEAD
=======


>>>>>>> products organized in a row and display filter working
}
