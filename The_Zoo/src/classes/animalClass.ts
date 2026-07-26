type AnimalCategory = "Mammal" | "Reptile" | "Bird" | "Fish" | "Amphibian" | "Insect";
type Food = "meat" | "vegetables";

export class Animal {
    constructor(
        public age: number,
        public name: string,
        public carnivore: boolean,
        public category: AnimalCategory
    ) {}
    eat = (food: Food): void => {
        if (food === "meat") {
            if (this.carnivore) {
                console.log("the animal is eating meat");
            } else {
                console.log("the animal is not a carnivore");
            }
        } else {
            if (!this.carnivore) {
                console.log("the animal is eating vegetables");
            } else {
                console.log("the animal is a carnivore and does not eat vegetables");
            }
        }
    };
    print = <T>(value: T): void => {
        console.log(typeof value);
    };
}
