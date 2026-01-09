// Write 3 JavaScript statements declaring variables for heroName, heroLevel, and heroHealth.
// Log them to the console.
var heroName = "Sanika";
let heroLevel = 5;
const heroHealth = 100;
console.log(heroName, heroLevel, heroHealth);


// Create a variable mana using let and reduce its value inside a loop.
// Create a const for MAX_HEALTH and try to change it. Observe the error.

let mana=20;
const MAX_HEALTH=100;
var i=0;
while(i<10)
{
    mana=i;
    console.log(mana);
    i++;
}
// MAX_HEALTH=80;
console.log("MaX Health: ",MAX_HEALTH);



// Declare 5 variables—each of a different type.
// Print each variable and its type using typeof.
// Predict outputs before running the code.

let level = 10;           // Number
let spell = "Fireball";    // String
let isAlive = true;       // Boolean
let inventory = ["potion","scroll"]; // Array
let hero = { name: "Aria", class: "Mage" }; // Object


console.log(typeof(level));
console.log(typeof spell);
console.log(typeof isAlive);
console.log(typeof inventory);
console.log(typeof hero);


