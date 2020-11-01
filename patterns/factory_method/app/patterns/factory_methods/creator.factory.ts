import {IProduct} from "./interfaces/product.interface";

export abstract class Creator {
    public abstract product(): IProduct;
}
