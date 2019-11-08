
import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {ProductService} from "../../service/product.service";
import {products} from "../../products";

@Component({
selector: 'app-related-items',
templateUrl: './related-items.component.html',
styleUrls: ['./related-items.component.css']
})
export class RelatedItemsComponent implements OnInit {

relatedProducts;

@Input() product;
constructor(public productService: ProductService) { }




  ngOnInit() {
    this.productService.findAllProducts().subscribe(data => {
     this.relatedProducts = data;
     console.log(data);
    });
  }
}