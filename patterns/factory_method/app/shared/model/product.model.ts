import {IProduct} from "../../patterns/factory_methods/interfaces/product.interface";

export class Product implements IProduct{
    constructor(
        public name: string,
        public price: number
    ) {
    }
}
