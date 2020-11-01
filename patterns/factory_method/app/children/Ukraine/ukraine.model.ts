import { Creator } from "../../creator.factory";
import { Watch } from "./products/watch/watch.model";

export class Ukraine extends Creator {

    public factoryMethod(): IProduct {
        return new Watch();
    }
}