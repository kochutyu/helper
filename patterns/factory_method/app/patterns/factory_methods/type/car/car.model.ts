import {IProduct} from "../../interfaces/product.interface";
import {ICar} from "./interfaces/car.interface";
import {CarFactory} from "./car.factory";

export class Car extends CarFactory implements ICar, IProduct {

    constructor(
        public name: string,
        public price: number
    ) {
        super(name, price);
    }

    public drive(): void {
        console.log(`${this.name} is going`);
    }

    public stopDrive(): void {
        console.log(`${this.name} is stopped`);
    }
}


