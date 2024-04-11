"use strict";
// Describe a Function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Calling a Function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
