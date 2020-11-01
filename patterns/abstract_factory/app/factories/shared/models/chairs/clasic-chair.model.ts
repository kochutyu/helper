import { Chair } from "../../interfaces/chair.interface";

export class ClasicChair implements Chair {
    description(): void {
        console.log('Clasic table');
    }
}