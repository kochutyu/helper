export class Product implements IProduct {
    public price: number;
    public version: number;
    public name: string;

    public getInfo(): string {
        return `${this.name} (${this.version}): ${this.price}$`;
    }

    public setInfo(name: string, version: number, price: number): string {
        this.name = name;
        this.version = version;
        this.price = price;
        return '';
    }
}