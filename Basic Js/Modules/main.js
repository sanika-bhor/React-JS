import { fire, ice } from "./spells.js";
fire(); // Casting Fire!
ice(); // Casting Ice!


// Create a module inventory.js exporting an array of items.
// Import it in main.js and log the items.
import { inventory } from "./inventory.js";

inventory.forEach((element) => {
  console.log(element);
});
