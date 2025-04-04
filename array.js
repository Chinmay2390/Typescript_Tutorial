//1. basic array type
var numbers = [1, 2, 3, 4, 5]; // Array of numbers
var names = ["Alice", "Bob", "Charlie"]; // Array of strings
console.log(numbers);
console.log(names);
//2. generic array type
var values = [10, 20, 30]; // Same as number[]
console.log(values);
//3. tuple (fixed length array with different types)
var user = ["Chinmay", 22]; // First element is string, second is number
console.log(user);
//4. readonly array
var readonlyNumbers = [1, 2, 3];
console.log(readonlyNumbers);
//5. Array with Union Types (Multiple Types Allowed)
var mixedArray = [1, "Hello", 2, "World"];
console.log(mixedArray);
//6. Multidimensional Array
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(matrix);
