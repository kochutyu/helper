import {Car} from "./patterns/factory_methods/type/car/car.model";
import {Ship} from "./patterns/factory_methods/type/ship/ship.model";

/**
 * generate cars
 */
const cars: Array<Car> = [
    new Car('Ford Focus', 213),
    new Car('Audi', 5000),
    new Car('BMW', 5000),
    new Car('Nisan', 5000),
];

/**
 * generate ships
 */
const ships: Array<Ship> = [
    new Ship('Laguna', 2133123),
    new Ship('Titanic', 100500)
]

/**
 * show element to console item through delay
 */
function showItem(arr: Array<any>, delay: number) {
    const interval = setInterval(() => {
        const index = delay / 1000;
        if (arr.length === index) {
            clearInterval(interval);
        }
        console.log(arr[index - 1]);
        delay += 1000;
    }, delay);
}

/**
 * delay for cars and ships
 */
let carsMessageDelay = 1000;
let shipsMessageDelay = 1000;

/**
 * show car item
 */
showItem(cars, carsMessageDelay);

/**
 * show ship item after cars [delay 4s]
 */
setTimeout(() => showItem(ships, shipsMessageDelay), 4000);
