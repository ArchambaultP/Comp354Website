import { Component, OnInit } from '@angular/core';
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


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId') - 1];
    });
  }

}
