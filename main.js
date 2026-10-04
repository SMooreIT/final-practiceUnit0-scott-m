/*
Create a repo with example code for how you would use the skills 
you have learned from Unit 0 in your application.  
Keep in mind: you will not be building a complete application!  
You are instead creating examples of code that might need to 
exist in this application, using the skills you have learned in 
Unit 0.

The code in your repo should:
    Include commented pseudocode to break down the logic for what 
    you are trying to accomplish in each example.

    Use console logs to test your outputs and ensure your code 
    works as expected.

    Follow all of the syntax rules and conventions you have learned 
    about in Unit 0.

    Include comments to identify where the skill from each module is 
    represented in the code.

    You’ll have comments to explain 6 total skills. One from each 
    of the following modules:
        Values, Data Types, and Operations
        Stringing Characters Together
        Control Structures and Logic
        Building Arrays
        Using Arrays
        Working With Loops

Keep in mind that you may use multiple skills on one line of code, 
just make sure you explain each skill in the comment.

*/

/*
Values, Data Types, and Operations 
    Skill: Declaring variables and assigning different data types
*/
/*
PSEUDOCODE:
1. Set a constant variable for the barbershops name.
2. Set variables to build a client profile(name, phone number, how long since we've seen them).
3. Set a boolean variable to check if the client has an existing appointment.
4. Log different variable types and different variable data types.
*/

const barberShop = "Scott's Cuts"; //Declared a constant variable using const.
let clientName = "John Smith"; //Declared variable using let. 
let clientPhone = "6361234567"
let recommendedTime = 4; //Declared variable with a number data type
let lastCut = 6; 
let hasAppt = true; //Declared variable with a boolean data type
/*
Stringing Characters Together
    Skill: Using Template Literals and String Interpolation
*/
console.log(`Thanks for choosing ${barberShop}, would you like to check in as ${clientName}?`); //Logs a welcome message using Template Literals.
console.log(`Looks like it's been ${lastCut} weeks since we've seen you last!`); // Using backticks to embed variables directly into strings.

/*
Control Structures and Logic
    Skill: Comparisons using Boolean Expressions and Conditionals.
*/
/*
PSEUDOCODE:
1. Check to see if the client has an appointment.
2. If client does NOT have an appointment, let them know they have been checked in as a walk-in and the wait time.
3. Else if client HAS been cut within recommended time AND does NOT have an appointment, let them know someone will be with them shortly.
4. Else let them know they have been checked in.
*/
let waitTime = "60 Minutes";

if (hasAppt !== true) { //checks if they have an appointment. if not, it logs to the console.
    console.log(`You have been checked in as a walk-in.  Your wait time is ${waitTime}`); // tells them they have been checked in and how long the wait is.
} else if (lastCut < recommendedTime && hasAppt !== true) { //Checks to see if they are coming in early and checks for appointment.
    console.log("Someone will be with you as soon as possible to assist.  You have been checked in as a walk-in.");    
} else { 
    console.log("You have been checked into your appointment and someone will be with you shortly.");
};

/*
Building Arrays
    Skill: Creating arrays with meaingful names and camelCase.
Using Arrays
    Skill: using array iterator methods to log array data 
*/
/*
PSEUDOCODE:
1. Create an array named "barbers" to represent the barbers available today.
2. Create an array for time slots available for walk-ins.
3. loop through the barber array and log all barbers.
4. loop through the openSlot array using forEach() and log all open time slots.
*/

let barbers = ["Scott", "Reagan", "Tasha", "Josh"]; //Array of barbers working.
let openSlots = ["2:00", "2:30", "4:00", "6:00"]; //Array of available time slots.

console.log("The following Barbers are working today: ");
barbers.forEach(barber => {
    console.log(barber); // logs all barbers from array using forEach().
});

console.log("The following time slots are currently available: ");
openSlots.forEach(time => {
    console.log(time); //logs all open time slots from the openSlot array using forEach().
});

/*
Working With Loops
    Skill: Using while loops to run a code block until the condition is no longer met.
*/
/*
PSEUDOCODE:
1. Declare a variable with the amount of time until closing.
2. Run a loop that decreases by 5 minutes everytime the loop runs and let clients know how much time until closing.
*/

let closingTime = 60; 

while (closingTime > 0) { // while closing time is more than 0, run loop.
    console.log(`${barberShop} will be closing in ${closingTime} minutes, check in now to ensure service today`);
    closingTime -= 5; // decreases the amount of time until close by 5 minutes.
}
console.log(`${barberShop} is now closed, we look forward to seeing you next time!`); //once loop requirement is no longer met, let clients know we are closed.
