import { Table } from "../../interfaces/table.interface";

export class ModernTable implements Table {
    description(): void {
        console.log('Modern table');
    }
}