import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products } from "../../products";
import { ascend, filter, groupBy, pipe, sort } from "ramda";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  inCategory = false;
  selectedDropDownButtonValue: any = 1;
  selectedCategoryButtonValue: string = "";
  searchText = "";

  constructor() {}

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

  // Returns filtered array that only contains products of the selected category
  // Might need to change depending on how retrieving categories from the database is implemented
  countCategorySelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  sortCategories(): void{
    console.log(this.selectedCategoryButtonValue);
    this.countCategorySelectionChanged.emit(this.selectedCategoryButtonValue);
    this.products = products.filter( product => {
        return product.category.toLowerCase().includes(this.selectedCategoryButtonValue)
    })

     // =======================================================================================
     // Change to sort based on rating
    this.products = sort(ascend(products => products.price), this.products);

    // Tells the search if it is searching in a category
    if(this.selectedCategoryButtonValue == ""){
        this.inCategory = false;
    }
    else{
        this.inCategory = true;
    }
  }

  // Stops the search from occurring every time a letter is changed
  update(value){
      this.searchText = value;
  }
  ngOnInit() {
  }

}
