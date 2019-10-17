import { Component, OnInit } from '@angular/core';
import {products} from "../../products";
import {Input} from "@angular/core";

@Component({
  selector: 'app-related-items',
  templateUrl: './related-items.component.html',
  styleUrls: ['./related-items.component.css']
})
export class RelatedItemsComponent implements OnInit {
products = products;

  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
