import { Creator } from "../../creator.factory";
import { Phone } from "./products/phone/phone.model";

export class Chaine extends Creator {

    public factoryMethod(): IProduct {
        return new Phone();
    }
}