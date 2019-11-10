export class Account {
    id: string;
    email: string;
    name: string;
    password: string;
    salt: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    phone: string;
    shippingAddress: string;
    shippingCity: string;
    shippingPostalCode: string;
    shippingCountry: string;
    dateJoined: string;
    canSell: boolean;
    canBuy: boolean;
    isAdmin: boolean;
    isSuperAdmin: boolean;
}
