export interface ICustomer {
    id: number,
    name: string,
    city: string,
    orderTotal? : number;       // ? means this is optional
    customerSince: any;         // any denotes that it can be of any data-type
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem [];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}


