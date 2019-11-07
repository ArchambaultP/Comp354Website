import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public searchText = "";

  constructor(private router: Router, public productService: ProductService) {}

  ngOnInit() {
  }

  setSearchText(){
    //this.productService.searchText = this.searchText;
    console.log("Search text in header: " + this.searchText);
  }
}
