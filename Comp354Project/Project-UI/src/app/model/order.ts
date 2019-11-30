import {Product} from "./product";

export class Order {
    id: number;
    price: string;
    quantity: string;
    shippingDate: string;
    product: Product;
}
