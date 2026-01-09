// Write an if-else to check hero health and log "Alive" or "Defeated".
// Use a for loop to simulate 5 rounds of attack.
// Try a while loop that continues until mana is 0.

let hero = {
  name: "Aria",
  class: "Mage",
  mana: 90,
  isAlive: true,
  level: 10,
  health: 50,
  attacks: [
    {attack1: { name: "Sword", damage: 50, type: "Melee" }},
    {attack2: { name: "Sword", damage: 40, type: "Melee" }},
    {attack3: { name: "Sword", damage: 95, type: "Melee" }},
    {attack4: { name: "Sword", damage: 23, type: "Melee" }},
    {attack5: { name: "Sword", damage: 78, type: "Melee" }}
  ]
}; 


if(hero.health>0)
{
    console.log("Alive");
}
else
{
    console.log("Defeated");
}


for(let i=0;i<5;i++)
{
    console.log("attack: ",i+1,"damage: ",hero.attacks[i]);
}


console.log("total mana: ",hero.mana);
while(hero.mana>0)
{
    let r = Math.floor(Math.random() * 10) + 1;
    console.log("remaining mana: ", hero.mana);
   hero.mana=hero.mana-r;
}
console.log("final mane is 0 and hero is not alive")
hero.isAlive=false;





// Create an object weapon with name, damage, type.
// Create an array inventory and push 3 items.
// Loop through the array and log each item.
let weapon = { name: "Sword", damage: 50, type: "Melee" };
let inventory = ["potion", "scroll", "ring"];
console.log(":::inventory:::");
for (let item of inventory) {
  console.log(item);
}