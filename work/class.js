"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes voice`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getBreed() {
        return this.breed;
    }
    setBreed(breed) {
        this.breed = breed;
    }
}
const dog1 = new Dog("tommy", "labrador");
console.log(dog1);
console.log(dog1.getName());
dog1.setName("rony");
console.log(dog1.getName());
console.log(dog1.getBreed());
dog1.setBreed("hybrid");
console.log(dog1.getBreed());
