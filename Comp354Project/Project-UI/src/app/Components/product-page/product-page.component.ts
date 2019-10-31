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
  @Output()
  countDropDownButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onDropDownButtonSelectionChange(selectedDropDownButtonValue: any): void{
    this.countDropDownButtonSelectionChanged.emit(this.selectedDropDownButtonValue);
    console.log(this.selectedDropDownButtonValue);

    if(this.selectedDropDownButtonValue == 1){
      this.products = sort(ascend(products => products.name), products)
    }
    else if(this.selectedDropDownButtonValue == 2){
      this.products = sort(ascend(products => products.name), products).reverse()
    }
    else if(this.selectedDropDownButtonValue == 3){
      this.products = sort(ascend(products => products.price), products)
    }
    else{
      this.products = sort(ascend(products => products.price), products).reverse()
    }

  }


  ngOnInit() {
  }

}
