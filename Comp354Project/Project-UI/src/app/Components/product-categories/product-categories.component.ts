import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { ascend, filter, groupBy, pipe, sort } from "ramda";
import {ProductService} from "../../service/product.service";
import {Router, NavigationEnd} from "@angular/router";
import { FilterPipe } from '../../pipes/filter.pipe';
import { Product } from '../../model/product';
import { SearchService} from "../../service/search.service";
import {Category} from "../../model/category";
import { ProductPageComponent } from '../product-page/product-page.component';
import { Department } from '../../model/department';
import { ActivatedRoute } from '@angular/router';
// import{ CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  selectedCategoryButtonValue = "";
  maxFilter = null;
  minFilter = null;
  departments: Department[];
  constructor(private productService: ProductService,
              private route: ActivatedRoute) {}
  categorychange(selectedCategoryButtonValue){
    console.log(selectedCategoryButtonValue)
    this.productService.selectedCategoryButtonValue = selectedCategoryButtonValue;
      console.log(this.productService.selectedCategoryButtonValue)
  }
   ngOnInit() {
     this.productService.findAllDepartments().subscribe(data => {
      this.departments = data;
      console.log(data);
     });
   }
   filterProducts(){
     if(this.maxFilter == null){
      this.productService.minPriceFilter = this.minFilter;
      console.log('passing through only max')
    }

     else if(this.minFilter == null){
      this.productService.maxPriceFilter = this.maxFilter;
      console.log('passing through only min')
    }

    else if(this.minFilter == null && this.maxFilter == null){
      this.productService.maxPriceFilter = 999999999;
      this.productService.minPriceFilter = 0;
      console.log('passing through nothing')
    }
    else{
      this.productService.maxPriceFilter = this.maxFilter;
      this.productService.minPriceFilter = this.minFilter;
}
   }
   resetFilterProducts(){
     this.productService.maxPriceFilter = 9999999;
     this.productService.minPriceFilter = 0;
     this.maxFilter = null;
     this.minFilter = null;
   }
 }
