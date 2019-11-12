import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { ascend, filter, groupBy, pipe, sort } from "ramda";
import {ProductService} from "../../service/product.service";
import {Router, NavigationEnd} from "@angular/router";
import { FilterPipe } from '../../pipes/filter.pipe';
import { Product } from '../../model/product';
import { SearchService} from "../../service/search.service";
import {Category} from "../../model/category";
import { ProductCategoriesComponent } from '../product-categories/product-categories.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  public searchText = "";
  navigationSubscription;
  inCategory = false;
  selectedDropDownButtonValue: any = 1;
  selectedCategoryButtonValue: string = "";
  categoryNames = [];

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

  constructor(public productService: ProductService, public searchService: SearchService, private router: Router) {
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

   console.log(this.categoryNames);
  }

  //Gets the search text from the product service
  ngOnInit() {
    this.searchText = this.searchService.searchText;
    this.productService.findAllProducts().subscribe(data => {
     this.products = data;
     // console.log(data);
    });
  }
  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  catChange(){
    if(this.selectedCategoryButtonValue == ""){
      this.productService.findAllProducts().subscribe(data => {
        this.products = data;
      });
    }
    else{
      this.productService.findByCategoryByName(this.selectedCategoryButtonValue).subscribe(data =>
      {
        this.category = data;
        this.products = this.category[0].products;
      });
    }
  }
}
