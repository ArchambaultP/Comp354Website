import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
