// Write a function castSpell(spellName) that logs "Casting spellName".
// Rewrite it using an arrow function.
// Call it 3 times with different spells.


//function 1
function castSpell(spellName) {
  console.log("Casting " + spellName);
  return "casting";
}

//function 2
let cast = (spellName) => console.log("Casting " + spellName);


let casting=castSpell("sanika");

//call function 1
castSpell("Sanika");
//call function 2
cast("sanika");
console.log(casting);



//example 2:
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add1 = (a, b) => a + b;
console.log(add(3, 4)); // 7


// Convert 3 traditional functions to arrow functions.
// Use an arrow function inside map() to double each number in an array:


const display= ()=>{
    console.log("displaying data");
}

display();

let num=[10,20,30,40];
const doubledata=num.map((n)=>n*2);
console.log(doubledata);