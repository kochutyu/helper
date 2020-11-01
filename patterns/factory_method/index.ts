/**
 * Create factory
 */
abstract class Creator {
    public abstract factoryMethod(): IProduct;

    public someOperation(): void {
        const product = this.factoryMethod();
        console.log(product);
    }
}


/**
 * Create factories in other country
 */
class Ukraine extends Creator {

    public factoryMethod(): IProduct {
        return new Watch();
    }
}

class Chaine extends Creator {

    public factoryMethod(): IProduct {
        return new Phone();
    }
}

/**
 * Interface for product
 */
interface IProduct {
    price: number;
    version: number;
    name: string;
    getInfo(): string;
    setInfo(name: string, version: number, price: number): string;
}

/**
 * Instance interface
 */
class Product implements IProduct {
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


/**
 * Create instenst
 */
class Watch extends Product {
    constructor() {
        super();
    }
}

class Phone extends Product {
    constructor() {
        super();
    }
}


/**
 * Test factories
 */
const watch = new Ukraine().factoryMethod();
watch.setInfo('Mi Bend', 5, 30);

console.log(watch.getInfo());
