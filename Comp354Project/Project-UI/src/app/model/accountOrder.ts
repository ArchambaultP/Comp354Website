import {OrderItem} from "./orderItem";

export class AccountOrder {
    id: number;
    date: string;
    orderItemList: OrderItem[];
}
