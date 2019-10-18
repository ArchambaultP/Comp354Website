import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products } from "../../products";
import { ascend, filter, groupBy, pipe, sort } from "ramda";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> products organized in a row and display filter working
=======

>>>>>>> Fixed product page bug when sorted
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products = products;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Fixed product page bug when sorted

//this section sorts out products on the page
  selectedRadioButtonValue: any = 1;

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange(selectedRadioButtonValue: any): void{
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);

    if(this.selectedRadioButtonValue == 1){
      this.products = sort(ascend(products => products.name), products)
      console.log("going through name");
      console.log(products)
    }
    else{
      this.products = sort(ascend(products => products.price), products)
      console.log("going through price");
    }
  }
<<<<<<< HEAD




>>>>>>> products organized in a row and display filter working

//this section sorts out products on the page
  selectedRadioButtonValue: any = 1;

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange(selectedRadioButtonValue: any): void{
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);

    if(this.selectedRadioButtonValue == 1){
      this.products = sort(ascend(products => products.name), products)
      console.log("going through name");
      console.log(products)
    }
    else{
      this.products = sort(ascend(products => products.price), products)
      console.log("going through price");
    }
  }
=======
>>>>>>> Fixed product page bug when sorted
  ngOnInit() {
  }

}
