var name1 = "chinmay";
console.log(name1);
name1 = undefined;
console.log(name1);
function greet(name3) {
    console.log("my name is ".concat(name3 || "Ram"));
}
greet();
greet("tushar");
greet("");
function processValue(value) {
    if (value === null || value === undefined) {
        console.log("No value provided.");
    }
    else {
        console.log("Value is: ".concat(value));
    }
}
processValue(undefined);
processValue(null);
// processValue();
function getLength(name4) {
    var _a;
    return (_a = name4 === null || name4 === void 0 ? void 0 : name4.length) !== null && _a !== void 0 ? _a : 0;
}
getLength(null);
var ans3 = getLength("chinmay kamlaskar");
console.log(ans3);
var user = /** @class */ (function () {
    function user(id, name) {
        this.id = id;
        this.name = name;
    }
    user.prototype.updateID = function (id) {
        //this.id = id;
    };
    return user;
}());
var user1 = new user(123, "chinmay kamlaskar");
console.log(user1);
var user3 = {
    name: "Chinmay",
    email: "chinmay@example.com",
    country: "India",
};
console.log(user3["name"]);
console.log(user3["email"]);
