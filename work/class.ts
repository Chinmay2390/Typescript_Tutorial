class Animal{
    name : string;

    constructor(name:string){
        this.name = name;
    }

    speak():void{
        console.log(`${this.name} makes voice`);
    }
}

class Dog extends Animal{
    breed : string;

    constructor(name:string,breed:string){
        super(name);
        this.breed = breed;
    }

    getName() : string{
        return this.name;
    }

    setName(name:string){
        this.name = name;
    }

    getBreed(): string{
        return this.breed;
    }

    setBreed(breed:string){
        this.breed = breed;
    }
}




const dog1 = new Dog("tommy","labrador");

console.log(dog1);
console.log(dog1.getName());
dog1.setName("rony");
console.log(dog1.getName());


console.log(dog1.getBreed());
dog1.setBreed("hybrid");
console.log(dog1.getBreed());