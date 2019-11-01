import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products } from "../../products";
import { ascend, filter, groupBy, pipe, sort } from "ramda";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  @Output() refresh:EventEmitter<string> = new EventEmitter();

  products = sort(ascend(products => products.name), products);

//this section sorts out products on the page
  selectedDropDownButtonValue: any = 1;
  selectedCategoryButtonValue: string = "";
  @Output()
  countDropDownButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  countCatgorySelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onDropDownButtonSelectionChange(selectedDropDownButtonValue: any): void{
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
  sortCategories(selectedCategoryButtonValue: string): void{
    console.log(this.selectedCategoryButtonValue)
    this.countCatgorySelectionChanged.emit(this.selectedCategoryButtonValue);
    this.products = products.filter( products => {
        return products.category.toLowerCase().includes(this.selectedCategoryButtonValue)
    })
  }

  ngOnInit() {
  }

}
