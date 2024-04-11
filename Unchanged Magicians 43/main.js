//Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Faiez", "Harry Poter", "Ahmed"];
// Making a copy of orignal throught .Slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays original and copied
// Original
console.log(magician_names);
show_magicians(magician_names);
// Copied
console.log(copy_great_magicians);
show_magicians(copy_great_magicians);
