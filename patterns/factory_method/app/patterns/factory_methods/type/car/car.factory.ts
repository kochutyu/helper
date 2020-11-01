import {Car} from "./car.model";
import {IProduct} from "../../interfaces/product.interface";
import {Creator} from "../../creator.factory";

export class CarFactory extends Creator implements IProduct{

    constructor(
        public name: string,
        public price: number
    ) {
        super();
    }

    public product(): IProduct {
        return new Car(this.name, this.price);
    }
}
