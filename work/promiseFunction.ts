async function greet():Promise<string>{
    return ("chinmay kamlaskar");
}

console.log(greet());

greet().then(
    (result) => {
        console.log(result);
    }
);

function greetWithDelay():Promise<string>{
    return new Promise(
        (resolve) => {
            setTimeout(
                ()=>{
                    resolve("chinmay kamlaskar");
                },2000
            );
        }
    );
}

greetWithDelay().then(
    (response) => {
        console.log(response);
    }
);


//interface in ts defines the shape of data they specify the properties and methods objects should have

interface Person{
    name : string;
    age :number;
    isVoter():boolean;
}

const person:Person = {
    name: "chinmay kamlaskar",
    age: 100,
    isVoter():boolean{
        return this.age>18;
    }
};

console.log(person.isVoter());