//1. basic array type
let numbers: number[] = [1, 2, 3, 4, 5];  // Array of numbers
let names: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings

console.log(numbers);
console.log(names);

//2. generic array type
let values: Array<number> = [10, 20, 30]; // Same as number[]
console.log(values);

//3. tuple (fixed length array with different types)
let user: [string, number] = ["Chinmay", 22]; // First element is string, second is number
console.log(user);


//4. readonly array
let readonlyNumbers: readonly number[] = [1, 2, 3];
console.log(readonlyNumbers);


//5. Array with Union Types (Multiple Types Allowed)
let mixedArray: (string | number)[] = [1, "Hello", 2, "World"];
console.log(mixedArray);


//6. Multidimensional Array
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
  ];
console.log(matrix);


  
