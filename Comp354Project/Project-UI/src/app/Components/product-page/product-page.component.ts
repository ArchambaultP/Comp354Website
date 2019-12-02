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
<<<<<<< HEAD
    this.productService.findAllProducts().subscribe(data => {
     this.products = data;
     this.filterprice();
=======
      console.log('this is a test' + this.selectedCategoryButtonValue)
      this.productService.findAllProducts().subscribe(data => {
      this.products = data;
      this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))
      // this.filteredProducts = [...this.Stores[0].Products.filter(product => product.Price
 // >= value.lower && product.Price <= value.upper )]

>>>>>>> master
    });
    }
    else{
      this.catChange();
      this.filterprice();
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
<<<<<<< HEAD
        this.filterprice();
=======
        this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))

>>>>>>> master
      });
    }
    else{
      this.productService.findByCategoryByName(this.selectedCategoryButtonValue).subscribe(data =>
      {
        this.category = data;
        this.products = this.category[0].products;
<<<<<<< HEAD
        this.filterprice();
=======
        this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))

>>>>>>> master
      });
    }
  }
  catChange2(){
    this.productService.selectedCategoryButtonValue = this.selectedCategoryButtonValue;

    if(this.productService.selectedCategoryButtonValue == ""){
      this.productService.findAllProducts().subscribe(data => {
        this.products = data;
<<<<<<< HEAD
        this.filterprice();
=======
        this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))

>>>>>>> master
      });
    }
    else{
      this.productService.findByCategoryByName(this.productService.selectedCategoryButtonValue).subscribe(data =>
      {
        this.category = data;
        this.products = this.category[0].products;
<<<<<<< HEAD
        this.filterprice();
=======
        this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))

>>>>>>> master
      });
    }
  }
  maxFilter = null;
minFilter = null;

 filterProducts(){
   console.log("this is dddd" + this.maxFilter + this.minFilter)
   if(this.minFilter == null && this.maxFilter == null){
     console.log('nothing here');
   }
   else if(this.maxFilter == null)
    this.productService.minPriceFilter = this.minFilter;
   else if(this.minFilter == null)
    this.productService.maxPriceFilter = this.maxFilter;
   else{
    this.productService.maxPriceFilter = this.maxFilter;
    this.productService.minPriceFilter = this.minFilter;
    console.log('nothing here111');
  }

 }
 resetFilterProducts(){
   this.productService.maxPriceFilter = 9999999;
   this.productService.minPriceFilter = 0;
   this.maxFilter = null;
   this.minFilter = null;
 }
filterprice(){
  this.products = this.products.filter(products => products.price <= String(this.productService.maxPriceFilter) && products.price >= String(this.productService.minPriceFilter))
}
}
