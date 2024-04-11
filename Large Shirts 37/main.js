"use strict";
// Making a Function
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a Function with by-defualt values
make_shirt("Large");
// Calling a Function now with Medium size and default message
make_shirt("Medium");
// Calling a Function now with Small Size and also print different message
make_shirt("Small", "I Love Javascript");
