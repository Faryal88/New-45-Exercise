// Making a Array of Countries and print it orignal order
let countriesTovisit: string[] =["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesTovisit);

//Print the Array in Alphabatical Order without Modifying the Actual Array List
console.log("Alphabatical Order:",[...countriesTovisit].sort());

// Show that the Array  is still in its Orginal Order
console.log("Still in Orginal Order:", countriesTovisit);

// Print the Array in Reverse Order Without modifying the Accual Array List
console.log("Reverse order:",[...countriesTovisit].reverse());

// Show that the Array  is still in its Orginal Order
console.log("Still in Orginal Order:", countriesTovisit);

// We have Change the Orginal Array Order now
console.log("Orginal Array Reversed:", countriesTovisit.reverse());

// Print the Array to show that it's back to its orginal order
console.log("Back to Orginal Order:", countriesTovisit.reverse());

// Print the Array to show that its order has been change in Alphabetical order now
console.log("sorted in Alphabetical Order:", countriesTovisit.sort());

// We have Change again the Orginal Array Order now in reverse order again
console.log("Orginal Array Reversed Again:", countriesTovisit.reverse());