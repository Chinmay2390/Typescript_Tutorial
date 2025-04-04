var emp1 = { id: 1, name: "chinmay", greet: function () {
        return "my name is ".concat(this.name);
    } };
emp1.age = 10;
console.log(emp1.age);
console.log(emp1.name);
console.log(emp1.id);
console.log(emp1.greet());
var myDog = { name: "tony", breed: "german" };
console.log(myDog);
var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["approved"] = 1] = "approved";
    Status[Status["rejected"] = 2] = "rejected";
})(Status || (Status = {}));
var orderStatus = Status.rejected;
console.log(orderStatus);
