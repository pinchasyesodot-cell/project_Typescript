import { Animal } from "./classes/animalClass.js";
import { Bee, Eagle, Frog, Lion, Snake, Tuna } from "./classes/animalsClasses.js";

const zoo: ReadonlyArray<Animal> = [
    new Lion(5, "Simba", "Pride Rock"),
    new Tuna(2, "Charlie", 500),
    new Snake(3, "Kaa", false),
    new Eagle(4, "Freedom", ["Brown", "White"]),
    new Bee(1, "Barry", "Worker"),
    new Frog(2, "kermit", [10, 25]),
];
zoo.forEach((animal) => {
    console.log(`name: ${animal.name}, category: ${animal.category}`);
    switch (true) {
        case animal instanceof Lion:
            console.log(`unique Lion pride Name is ${animal.prideName}`);
            break;
        case animal instanceof Tuna:
            console.log(`unique Tuna max Depth Metres is ${animal.maxDepthMetres}`);
            break;
        case animal instanceof Snake:
            console.log(`unique Snake is Venomons is ${animal.isVenomous}`);
            break;
        case animal instanceof Eagle:
            console.log(`unique Eagle feather Colors is ${animal.featherColors}`);
            break;
        case animal instanceof Bee:
            console.log(`unique Bee role is ${animal.role}`);
            break;
        case animal instanceof Frog:
            console.log(`unique Frog jump Coordinates is ${animal.jumpCoordinates}`);
            break;
        default:
            console.log("Unknown animal");
    }
});
