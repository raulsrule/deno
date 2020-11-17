// To execute run: deno run window.ts => deno run --allow-read window.ts (because 'file.ts' is being used)

// notice `.ts`. Extensions are a MUST for imports in Deno. Doesn't matter whether its a file or a script url
import { sum } from "./jsdoc.ts";
import { extns } from "./file.ts";

let name = "";

// Clears previous stdout from Deno. Works exactly like the browser
console.clear();

window.onload = (e: Event): void => {
  console.log(`${e.type} event.`);

  while (!name) {
    const value = window.prompt("Enter your name:");
    if (value) {
      name = value;
      break;
    }
  }
};

window.onunload = (e: Event): void => {
  console.log(`${e.type} event. Your name is "${name}"`);
  console.log(`summation of 1 and 2 gives ${sum(1, 2)}`);
  console.log(`recommended extensions`, extns);
};
