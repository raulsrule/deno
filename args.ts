// To execute run: deno run args.ts a=1 b=2 c=apple

/**
  Ignore any errors stating `Deno` or something related to it is broken or missing, or if code syntax color gets derailed. Its because vscode-deno (extension) is having a hard day at work!
  If there are any actual errors it would be printed onto the terminal itself.
 */

/** 
 * So the basic concept is -
 * left-side (filename.ts) : arguments that are related to running the script using Deno like --allow-read etc.
 * (filename.ts) right-side: arguments that are required to be passed to the script 
 */
const args: string[] = Deno.args as string[];

if (args.length) {
  console.table(
    args.reduce((a, c) => {
      const [name, value] = c.split("=");
      a[name] = value;
      return a;
      // deno-lint-ignore no-explicit-any
    }, {} as any),
  );
} else {
  console.error("Error: Provide some script arguments!");
}
