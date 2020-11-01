export abstract class Creator {

    public abstract factoryMethod(): IProduct;

    public someOperation(): void {
        const product = this.factoryMethod();
        console.log(product);
    }
}