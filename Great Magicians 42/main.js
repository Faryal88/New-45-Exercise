"use strict";
//Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() it will modify array
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
// Define an array of magicians names
let magician_names = ["Faiez", "Harry Poter", "Ahmed"];
// Call make_great function to modify magicians names
let great_magicians = make_great(magician_names);
// Call show_magicians that show modified list of magicians
show_magicians(great_magicians);
