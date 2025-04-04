interface Employee {
    readonly id : number;
    name : string;
    age?: number;
    greet(): string;
}

let emp1 : Employee = {id:1, name:"chinmay", greet(){
    return `my name is ${this.name}`;
}};
emp1.age = 10;

console.log(emp1.age);
console.log(emp1.name);
console.log(emp1.id);

console.log(emp1.greet());


interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog : Dog = {name : "tony", breed : "german"};

console.log(myDog)

enum Status {
    pending,
    approved,
    rejected
}

let orderStatus : Status = Status.rejected;
console.log(orderStatus);
