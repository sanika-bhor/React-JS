// Use arithmetic operators to calculate total damage from 3 attacks.
// Use logical operators to determine if a hero can cast a spell (enough mana AND alive).
// Use comparison operators to compare hero levels.

let hero = { name: "Aria", class: "Mage", mana: "mind control" ,isAlive:true ,level:10,attacks:{
    attack1:{ name: "Sword", damage: 50, type: "Melee" },
    attack2 : { name: "Sword", damage: 40, type: "Melee" },
    attack3 :{ name: "Sword", damage: 55, type: "Melee" }
}

}; 


let total_Damage = hero.attacks.attack1.damage + hero.attacks.attack2.damage + hero.attacks.attack3.damage;
console.log("Total damage:", total_Damage);

if (hero.isAlive && hero.mana == "mind control") {
  console.log("Hero: ", hero);
}

if (hero.level >= 8) {
  console.log("Super hero");
} else {
  console.log("Hero");
}



// Spread Operator


// Array spread
let arr1 = [1,2];
let arr2 = [...arr1, 3,4]; // [1,2,3,4]
console.log(arr2);

// Object spread
let obj1 = {x:1, y:2};
let obj2 = {...obj1, z:3}; // {x:1, y:2, z:3}
console.log(obj2);



// Merge two arrays of treasure items using the spread operator.
// Clone an object and add a new property.

let arr3=[1,2,3,4];
let arr4=[1,2,3,4];
let arr5=[...arr3,...arr4];
console.log(arr5);

let obj3={name:"sanika",age:20,dept:"cs"};
let obj4={...obj3,city:"Tambademala"};
console.log(obj4);
