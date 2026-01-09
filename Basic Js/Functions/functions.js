// Write a function castSpell(spellName) that logs "Casting spellName".
// Rewrite it using an arrow function.
// Call it 3 times with different spells.


//function 1
function castSpell(spellName) {
  console.log("Casting " + spellName);
}

//function 2
let cast = (spellName) => console.log("Casting " + spellName);




//call function 1
castSpell("Sanika");
//call function 2
cast("sanika");
