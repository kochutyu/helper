import { Table } from "../../interfaces/table.interface";

export class ClasicTable implements Table {
    description(): void {
        console.log('Clasic table');
    }
}