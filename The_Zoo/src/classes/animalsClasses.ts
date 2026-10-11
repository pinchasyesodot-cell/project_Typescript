import { Animal } from "./animalClass";
interface ILion {
    prideName: string;
}
export class Lion extends Animal implements ILion {
    constructor(
        age: number,
        name: string,
        public prideName: string
    ) {
        super(age, name, true, "Mammal");
    }
}

interface ITuna {
    maxDepthMetres: number;
}
export class Tuna extends Animal implements ITuna {
    constructor(
        age: number,
        name: string,
        public maxDepthMetres: number
    ) {
        super(age, name, true, "Fish");
    }
}

interface ISnake {
    isVenomous: boolean;
}
export class Snake extends Animal implements ISnake {
    constructor(
        age: number,
        name: string,
        public isVenomous: boolean
    ) {
        super(age, name, true, "Reptile");
    }
}

interface IEagle {
    featherColors: string[];
}
export class Eagle extends Animal implements IEagle {
    constructor(
        age: number,
        name: string,
        public featherColors: string[]
    ) {
        super(age, name, true, "Bird");
    }
}

type BeeRole = "Queen" | "Worker" | "Drone";

interface IBee {
    role: BeeRole;
}
export 
class Bee extends Animal implements IBee {
    constructor(
        age: number,
        name: string,
        public role: BeeRole
    ) {
        super(age, name, false, "Insect");
    }
}

interface IFrog {
    jumpCoordinates: [number, number];
}
export 
class Frog extends Animal implements IFrog {
    constructor(
        age: number,
        name: string,
        public jumpCoordinates: [number, number]
    ) {
        super(age, name, true, "Amphibian");
    }
}
