// type assertion allows developers to change the type inferred by compiler to specific type

let developer : any = 123;

let lengthOfDeveloper : number = (developer as string).length;

console.log(developer);
console.log(lengthOfDeveloper);


