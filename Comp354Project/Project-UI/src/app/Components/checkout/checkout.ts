import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.html',
    styleUrls: ['./checkout.css']
})
export class CartComponent implements OnInit {
    cartProducts: any;
    bill: any;

    constructor() { }

    ngOnInit() {
        this.initiateData();
    }

    initiateData() {
        let data = localStorage.getItem('cart');
        if(data !== null){
            this.cartProducts = JSON.parse(data);
            this.bill = 0;
            for(let i in this.cartProducts){
                this.cartProducts[i]["qt"] = 1;
                this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
            }
        } else {
            this.cartProducts = [];
        }
    }

    updateTotal() {
        this.bill = 0;
        for(let i in this.cartProducts){
            this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
        }
    }

    removeItem(id) {
        this.cartProducts.splice(id, 1);
        if(this.cartProducts.length){
            localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        } else {
            localStorage.setItem('cart', null);
        }
    }

    payBill() {
        if(this.cartProducts.length){
            localStorage.removeItem('cart');
            this.initiateData();
            alert("Total amount: " + this.bill);
        } else {
            alert("No items in cart");
        }
    }
}