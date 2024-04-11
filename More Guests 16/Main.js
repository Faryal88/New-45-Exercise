"use strict";
// Creating a Guest List Array
let guestList = ["Hamza", "Muskan", "Faiez", "Zainab"];
// making variable for those guest who cant come
let dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Sakhty Hai");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Aamir");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of Array
guestList.unshift("Ali");
// Adding a new value at ending index of Array
guestList.push("Alina");
// Get a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Hiba");
//Print Messsage of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Asalam u Alaikum ${oneguest}, would you like to dinner with me`));
