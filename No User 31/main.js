"use strict";
// Creating a Array with Five Value
let userName = ["Faryal", "Zainab", "Faiez", "Admin", "Raima"];
// Remove all value from our Array Now your Array is Empty 
userName = [];
if (userName.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    userName.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
