let guestList = ["Hamza","Alisha","Faryal","Hiba"];

let dontCome = guestList[1];

console.log(dontCome, "Nahi Ahh Skthi");

guestList.splice(1, 1, "Raima");

guestList.forEach(guest => console.log(`Assalam ${guest}, would u like to Dinner with me?`));