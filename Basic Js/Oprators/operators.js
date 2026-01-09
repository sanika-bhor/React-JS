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
