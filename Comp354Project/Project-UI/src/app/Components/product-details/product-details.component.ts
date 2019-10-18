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

=======
>>>>>>> Fixed product page bug when sorted
  products = products;
  product;
  constructor(private route: ActivatedRoute,) {
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> products organized in a row and display filter working
=======
>>>>>>> Fixed product page bug when sorted

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId') - 1];
    });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> products organized in a row and display filter working
=======
>>>>>>> Fixed product page bug when sorted
}
