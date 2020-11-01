/**
 * Interface for factory
 */
interface IAbstractFactory {
    createTable(): Table;
    createChair(): Chair;
}


/**
 * Two factory in other city
 */
class Lviv implements IAbstractFactory {
    createTable(): Table {
        return new ModernTable();
    }
    createChair(): Chair {
        return new ModernChair();
    }
}

class Kyiv implements IAbstractFactory {
    createTable(): Table {
        return new ClasicTable();
    }
    createChair(): Chair {
        return new ClasicChair();
    }
}

/**
 * Table model
 */
interface Table {
    description(): void;
}

class ModernTable implements Table {
    description(): void {
        console.log('Modern table');
    }
}

class ClasicTable implements Table {
    description(): void {
        console.log('Clasic table');
    }
}

/**
 * Chair model
 */
interface Chair {
    description(): void;
}

class ModernChair implements Chair {
    description(): void {
        console.log('Modern table');
    }
}

class ClasicChair implements Chair {
    description(): void {
        console.log('Clasic table');
    }
}

/**
 * Test
 */
const modern = new Lviv();
const clasic = new Kyiv();

modern.createChair().description()
clasic.createChair().description()

modern.createTable().description()
clasic.createTable().description()