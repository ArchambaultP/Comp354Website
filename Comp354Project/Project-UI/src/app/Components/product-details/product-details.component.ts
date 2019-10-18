import { Component, OnInit } from '@angular/core';
import { products} from "../../products";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
<<<<<<< HEAD
  products = products;
product;
  constructor(private route: ActivatedRoute,) { }
=======

  products = products;
  product;
  constructor(private route: ActivatedRoute,) {
    }
    
>>>>>>> cd92b585eff36159a38695844bcc3f6d238fdc62

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

<<<<<<< HEAD
=======

>>>>>>> cd92b585eff36159a38695844bcc3f6d238fdc62
}
