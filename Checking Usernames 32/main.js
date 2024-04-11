"use strict";
// Array of Current Users
let current_users = ["Alishba", "Anumta", "aqsa", "Safia", "Iqra"];
// Array of New Users
let new_users = ["Faryal", "Areeba", "Aqsa", "Raima", "Safia"];
// Loop through new_users to check for usernames avalibility
new_users.forEach(new_one_user => {
    // Making a condation for usernames already exist and save in our_condation variable
    let our_condation = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // Print different messages using If-Else statements
    if (our_condation) {
        console.log(`sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`This Username ${new_one_user} is avaliable`);
    }
});
