import { IAbstractFactory } from "../shared/interfaces/abstract-factory.interface";
import { Chair } from "../shared/interfaces/chair.interface";
import { Table } from "../shared/interfaces/table.interface";
import { ClasicChair } from "../shared/models/chairs/clasic-chair.model";
import { ClasicTable } from "../shared/models/tables/clasic-table.model";

export class Kyiv implements IAbstractFactory {
    createTable(): Table {
        return new ClasicTable();
    }
    createChair(): Chair {
        return new ClasicChair();
    }
}