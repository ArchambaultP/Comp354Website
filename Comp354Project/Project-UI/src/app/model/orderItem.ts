import {Product} from "./product";

export class OrderItem {
    id: number;
    price: string;
    quantity: string;
    shippingDate: string;
    product: Product;
}
