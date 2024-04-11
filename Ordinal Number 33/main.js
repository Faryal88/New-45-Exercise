"use strict";
// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using for loop
for (let oneNumber of numbers) {
    let ordinailning;
    if (oneNumber === 1) {
        ordinailning = "st";
    }
    else if (oneNumber === 2) {
        ordinailning = "nd";
    }
    else if (oneNumber === 3) {
        ordinailning = "rd";
    }
    else {
        ordinailning = "th";
    }
    console.log(`${oneNumber}${ordinailning}`);
}
