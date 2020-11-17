// To execute run: deno run file.ts => deno run --allow-read file.ts

const decoder = new TextDecoder("utf-8");
const textUint8Array = await Deno.readFile("./.vscode/extensions.json");
console.log(
  "file => uint8array => decoded => plain text\n",
  decoder.decode(textUint8Array),
);

// top-level await, deferring the need for any `async` IIFE
const textPlain = await Deno.readTextFile("./.vscode/extensions.json");
console.log("file => plain text\n", textPlain);

export { textPlain as extns };
