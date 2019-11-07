import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { products } from "../../products";
import { ascend, filter, groupBy, pipe, sort } from "ramda";
import {ProductService} from "../../service/product.service";
import {Router, NavigationEnd} from "@angular/router";
import { FilterPipe } from '../../pipes/filter.pipe';


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

  //IMPORTANT
  // By default sort products based on rating
  products = sort(ascend(products => products.price), products);

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

  constructor(public productService: ProductService, private router: Router) {
    // subscribe to the router events. Store the subscription so we can unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  //Gets the search text from the product service
  ngOnInit() {
    this.products = this.productService.findAllProducts;
  }
  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
<<<<<<< HEAD

  refreshSearch() {
    //this.searchText = this.productService.searchText;
    console.log("Search text in product page: " + this.searchText);
  }
=======
>>>>>>> 27d5726ac0223a05afea2ce741d68d6a98f8ed66
}
