interface IProduct {
    price: number;
    version: number;
    name: string;
    getInfo(): string;
    setInfo(name: string, version: number, price: number): string;
}