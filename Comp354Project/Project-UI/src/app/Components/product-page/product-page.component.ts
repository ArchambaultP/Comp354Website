<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { products} from "../../products";

=======
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products } from "../../products";
import { ascend, filter, groupBy, pipe, sort } from "ramda";
>>>>>>> cd92b585eff36159a38695844bcc3f6d238fdc62
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
<<<<<<< HEAD
products = products;
  constructor() { }
=======
  products = products;

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
    }
    else{
      this.products = sort(ascend(products => products.price), products)
      console.log("going through price");
    }

  }




>>>>>>> cd92b585eff36159a38695844bcc3f6d238fdc62

  ngOnInit() {
  }

}
