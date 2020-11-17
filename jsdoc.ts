// To execute run: deno doc jsdoc.ts OR deno doc jsdoc.ts --json

/**
 * Accepts two args `a` and `b`, adds them and returns a summed result
 * @param a : number
 * @param b : number
 * @returns result : number
 * 
 * Yay, I'm visible in the doc output :)
 */
export function sum(a: number, b: number) {
  return a + b;
}

/** 
 * Accepts two args `a` and `b`, multiplies them and returns the product
 * @param a : number
 * @param b : number
 * @returns result : number
 * 
 * Y u do this? :( 
 * 
 * Note: ONLY exported functions, consts will be available in the doc! 
 */
function mult(a: number, b: number) {
  return a - b;
}
