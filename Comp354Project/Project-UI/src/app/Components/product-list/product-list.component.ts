import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { Department } from '../../model/department';

import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  productName = "Microsoft Surface Pro 6";

 constructor(private productService: ProductService,
             private route: ActivatedRoute) {}

  ngOnInit() {
    this.productService.findAllProducts().subscribe(data => {
     this.products = data;
     console.log(data);
    });
  }

    //ngOnInit() {
    //    this.productService.findByProductName(this.productName).subscribe(data => {
    //      this.products = data;
    //      console.log(data);
    //    });
    //}

    //ngOnInit() {
    //    this.route.paramMap.subscribe(params => {
    //    console.log(params.get('id'))
    //     this.productService.findProductById(params.get('id')).subscribe(p =>{
            //console.log(p);
    //        this.products = [p];
    //        })
    //    });
    //}
}
