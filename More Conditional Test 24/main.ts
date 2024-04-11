// Define veriable
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = "10";
let twenty = "20";
let fruits = ["apple", "banana", "orange"];

// Test for equality and inequality with strings

// Test for Equality
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

// Test for Inequality
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Test using lowercase Funtion
console.log("\nIs APPLE is equal to appleafter converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to appleafter converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical tests
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\n twenty is less than or equal to 10?");
console.log(twenty <= 10);

// Tests usign "and" & "or" operators

// using && 
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);


// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whethervan item is include in array
console.log("\nIs orange include in my Fruits array");
console.log(fruits.includes("orange"));

console.log("\nIs orange not include in my Fruits array");
console.log(!fruits.includes("orange"));









