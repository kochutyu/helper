import { IAbstractFactory } from "../shared/interfaces/abstract-factory.interface";
import { Chair } from "../shared/interfaces/chair.interface";
import { Table } from "../shared/interfaces/table.interface";
import { ModernChair } from "../shared/models/chairs/modern-chair.model";
import { ModernTable } from "../shared/models/tables/modern-table.model";

export class Lviv implements IAbstractFactory {
    createTable(): Table {
        return new ModernTable();
    }
    createChair(): Chair {
        return new ModernChair();
    }
}