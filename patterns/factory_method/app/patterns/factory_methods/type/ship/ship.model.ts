import {ShipFactory} from "./ship.factory";
import {IShip} from "./interfaces/ship.interface";
import {IProduct} from "../../interfaces/product.interface";

export class Ship extends ShipFactory implements IShip, IProduct{

    constructor(
        public name: string,
        public price: number
    ) {
        super(name, price);
    }

    sail(): void {
        console.log( `${this.name} is sailing`);
    }

    stopSail(): void {
        console.log(`${this.name} is stopped`);
    }
}
