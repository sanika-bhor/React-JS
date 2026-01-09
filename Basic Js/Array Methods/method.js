let numbers = [1, 2, 3, 4, 5];

// map
let squared = numbers.map((n) => n * n); // [1,4,9,16,25]

// filter
let even = numbers.filter((n) => n % 2 === 0); // [2,4]

// reduce
let sum = numbers.reduce((acc, n) => acc + n, 0); // 15

console.log(squared);
console.log(even);
console.log(sum);

// Use map to increase each hero level by 1.
// Use filter to select only high-level heroes (level > 3).
// Use reduce to calculate total damage from an array of attack points.

let heros = [
  {
    hero: {
      name: "Aria",
      class: "Mage",
      mana: 90,
      isAlive: true,
      level: 6,
      health: 50,
      attack1: { name: "Sword", damage: 50, type: "Melee" } 
    },
  },

  {
    hero: {
      name: "bria",
      class: "Mage",
      mana: 90,
      isAlive: true,
      level: 1,
      health: 50,
      attack1: { name: "Sword", damage: 50, type: "Melee" } 
    },
  },

  {
    hero: {
      name: "cria",
      class: "Mage",
      mana: 30,
      isAlive: true,
      level: 5,
      health: 50,
       attack1: { name: "Sword", damage: 50, type: "Melee" }
    },
  },
];


let upgreadeHero=heros.map((hero)=>hero.hero.level+1);
console.log("increase each hero level by 1:",upgreadeHero);

let selectedHero=heros.filter((hero)=>hero.hero.level>3);
console.log("select only high-level heroes (level > 3):",selectedHero);

let total_Damage=heros.reduce((totaldamage,hero)=>totaldamage+hero.hero.attack1.damage,0);
console.log("Calculate total damage from an array of attack points:",total_Damage);


// Destructuring;

// Array
let arr = [10, 20, 30];
let [first, second] = arr;
console.log(first, second); // 10 20

// Object
let hero = {name: "Aria", level: 5};
let {name, level} = hero;
console.log(name, level); // Aria 5