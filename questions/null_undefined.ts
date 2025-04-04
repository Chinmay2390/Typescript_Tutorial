let name1: string | undefined = "chinmay";
console.log(name1);

name1 = undefined;
console.log(name1);

function greet(name3? : string){
    console.log(`my name is ${name3 || "Ram"}`)
}


greet();
greet("tushar");
greet("")

function processValue(value: string | null | undefined ) {
    if (value === null || value === undefined) {
      console.log("No value provided.");
    } else {
      console.log(`Value is: ${value}`);
    }
}


processValue(undefined);
processValue(null);
// processValue();



function getLength(name4:string | null | undefined){
    return name4?.length ?? 0;
}

getLength(null);
let ans3 = getLength("chinmay kamlaskar");
console.log(ans3);



class user{
    readonly id : number;
    name : string;

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }

    updateID(id:number){
        //this.id = id;
    }

}

const user1  = new user(123,"chinmay kamlaskar");
console.log(user1);



interface User {
    [key: string]: string;
  }
  
  const user3: User = {
    name: "Chinmay",
    email: "chinmay@example.com",
    country: "India",
  };
  
console.log(user3["name"]); 
console.log(user3["email"]); 
  
