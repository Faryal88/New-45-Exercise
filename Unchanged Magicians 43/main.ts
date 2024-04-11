//Define the function to show magicians names
function show_magicians(magicians: string[]){
	magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magician: string[]){
	return magician.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Faiez", "Harry Poter", "Ahmed"];

// Making a copy of orignal throught .Slice() function
let copy_magician_names = magician_names.slice()

// Modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);

// Show both arrays original and copied

// Original
console.log(magician_names);
show_magicians(magician_names);

// Copied
console.log(copy_great_magicians);
show_magicians(copy_great_magicians);






