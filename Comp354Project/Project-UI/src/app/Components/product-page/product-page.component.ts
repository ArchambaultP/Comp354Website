import { Component, OnInit } from '@angular/core';
import { products} from "../../products";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
products = products;
  constructor() { }

  ngOnInit() {
  }

}
