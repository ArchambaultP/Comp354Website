import { Component, OnInit } from '@Angular/core';
import {products} from "../../products";
import {Input} from "@angular/core";

@Component({
  selector: 'app-related-items',
  templateUrl: './related-items.component.html',
  styleUrls: ['./related-items.component.css']
})
export class RelatedItemsComponent implements OnInit {
relatedProducts = products;

  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
