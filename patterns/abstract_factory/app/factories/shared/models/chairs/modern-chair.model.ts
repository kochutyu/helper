import { Chair } from "../../interfaces/chair.interface";

export class ModernChair implements Chair {
    description(): void {
        console.log('Modern table');
    }
}