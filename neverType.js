// function neverStop():never{
//     while(true){
function getName(student) {
    switch (student) {
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
            var _exhaustiveCheck = student;
            return _exhaustiveCheck;
    }
}
getName('tina');
