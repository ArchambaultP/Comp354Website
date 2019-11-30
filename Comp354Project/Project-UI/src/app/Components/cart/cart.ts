import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
    templateUrl: 'index.component.html'
})

export class CartComponent implements OnInit {

    private items: Product[] = [];
    private total: number = 0;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            var id = params['id'];
            if (id) {
                var item: Product = {
                    product: this.productService.findProductById(id),
                    quantity: '1'
                };
                if (localStorage.getItem('cart') == null) {
                    let cart: any = [];
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                } else {
                    let cart: any = JSON.parse(localStorage.getItem('cart'));
                    let index: number = -1;
                    for (var i = 0; i < cart.length; i++) {
                        let item: Product = JSON.parse(cart[i]);
                        if (item.id == id) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                    } else {
                        let item: Product = JSON.parse(cart[index]);
                        item.quantity += 1;
                        cart[index] = JSON.stringify(item);
                        localStorage.setItem("cart", JSON.stringify(cart));
                    }
                }
                this.loadCart();
            } else {
                this.loadCart();
            }
        });
    }

    loadCart(): void {
        this.total = 0;
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
            this.total += item.product.price * item.quantity;
        }
    }

    remove(id: string): void {
        let cart: any = JSON.parse(localStorage.getItem('cart'));
        let index: number = -1;
        for (var i = 0; i < cart.length; i++) {
            let item: Product = JSON.parse(cart[i]);
            if (item.id == id) {
                cart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        this.loadCart();
    }

}