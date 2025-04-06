// function neverStop():never{
//     while(true){

//     }
// }


// console.log(neverStop());

// console.log("never finishes");

type name = 'chinmay'|'rahul'|'tina';

function getName(student:name):void{

    switch(student){
        case 'chinmay':
            console.log(student);
            break;
        case 'rahul':
            console.log(student);
            break;
        case 'tina':
            console.log(student);
            break;
        
        default:
            const _exhaustiveCheck : never = student;
            return _exhaustiveCheck;
    }
}

getName('tina');