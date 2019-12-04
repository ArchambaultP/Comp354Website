import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { ascend, filter, groupBy, pipe, sort } from "ramda";
import {ProductService} from "../../service/product.service";
import {Router, NavigationEnd} from "@angular/router";
import { FilterPipe } from '../../pipes/filter.pipe';
import { Product } from '../../model/product';
import { SearchService} from "../../service/search.service";
import {Category} from "../../model/category";
import { ProductCategoriesComponent } from '../product-categories/product-categories.component';
// import{ CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  public searchText = "";
  navigationSubscription;
  inCategory = false;
  selectedDropDownButtonValue: any = "";
  selectedCategoryButtonValue: string = "";
  categoryNames = [];
  a=8;

maxFilter = null;
minFilter = null;

  //IMPORTANT
  // By default sort products based on rating
  products: Product[];
  category: Category[];
  // products = sort(ascend(products => products.price), products);

  @Output() refresh:EventEmitter<string> = new EventEmitter();

  // Sorts products.
  // ADD SORT FOR CUSTOMER RATING AND WTV ELSE IS NEEDED
  countDropDownButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  onDropDownButtonSelectionChange(): void{
    this.countDropDownButtonSelectionChanged.emit(this.selectedDropDownButtonValue);
    console.log(this.selectedDropDownButtonValue);

    if(this.selectedDropDownButtonValue == 1){
      this.products = sort(ascend(products => products.name), this.products)
    }
    else if(this.selectedDropDownButtonValue == 2){
      this.products = sort(ascend(products => products.name), this.products).reverse()
    }
    else if(this.selectedDropDownButtonValue == 3){
      this.products = sort(ascend(products => products.price), this.products)
    }
    else{
      this.products = sort(ascend(products => products.price), this.products).reverse()
    }
  }

  constructor( public productService: ProductService, public searchService: SearchService, private router: Router) {
    // subscribe to the router events. Store the subscription so we can unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

   this.productService.findAllCategories().subscribe(data=> {
      for(let item of data){
        this.categoryNames.push(item.name);
      }
    });
  }

  //Gets the search text from the product service
  ngOnInit() {
    this.selectedCategoryButtonValue = this.productService.selectedCategoryButtonValue;
    console.log(this.productService.selectedCategoryButtonValue)
    console.log("this is the selected category" + this.selectedCategoryButtonValue )
    this.searchText = this.searchService.searchText;
    if (this.selectedCategoryButtonValue == ""){
      console.log('this is a test' + this.selectedCategoryButtonValue)
      this.productService.findAllProducts().subscribe(data => {
      this.products = data;
      this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))
      // this.filteredProducts = [...this.Stores[0].Products.filter(product => product.Price
 // >= value.lower && product.Price <= value.upper )]

    });
    }
    else{
      this.catChange();
    }
  }
  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  catChange(){
    this.productService.selectedCategoryButtonValue = this.selectedCategoryButtonValue;

    if(this.selectedCategoryButtonValue == ""){
      this.productService.findAllProducts().subscribe(data => {
        this.products = data;
        this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))

      });
    }
    else{
      this.productService.findByCategoryByName(this.selectedCategoryButtonValue).subscribe(data =>
      {
        this.category = data;
        this.products = this.category[0].products;
        this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))

      });
    }
  }
  catChange2(){
    this.productService.selectedCategoryButtonValue = this.selectedCategoryButtonValue;

    if(this.productService.selectedCategoryButtonValue == ""){
      this.productService.findAllProducts().subscribe(data => {
        this.products = data;
        this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))

      });
    }
    else{
      this.productService.findByCategoryByName(this.productService.selectedCategoryButtonValue).subscribe(data =>
      {
        this.category = data;
        this.products = this.category[0].products;
        this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))

      });
    }
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

  shuffleArray(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
return array;
}
}
