import {Creator} from "../../creator.factory";
import {Ship} from "./ship.model";
import {IProduct} from "../../interfaces/product.interface";

export class ShipFactory extends Creator implements IProduct{

    constructor(
        public name: string,
        public price: number
    ) {
        super();
    }

    product(): IProduct {
        return new Ship(this.name, this.price);
    }
}
