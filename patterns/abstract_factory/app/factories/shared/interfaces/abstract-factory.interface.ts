import { Chair } from "./chair.interface";
import { Table } from "./table.interface";

export interface IAbstractFactory {
    createTable(): Table;
    createChair(): Chair;
}