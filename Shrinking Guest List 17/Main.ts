// Creating a Guest List Array
let guestList =["Hamza","Muskan","Faiez","Zainab"];

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
let middleIndex: number = Math.floor(guestList.length / 2); 

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Hiba");

//Print Messsage of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Asalam u Alaikum ${oneguest}, would you like to dinner with me`));

// Inform that only two guests canbe invited for dinner
console.log("unfortuntly, the new dinner table worst arrive on time, so I can only invite two Guests to dinner with me");

// Using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2){
     let removedGuest =  guestList.pop();
	 console.log(`Sorry ${removedGuest} I cant invite you to dinner`);
}
// Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, You are still invited to dinner`));

// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty list", guestList);






