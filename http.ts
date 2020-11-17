// To execute run: deno run http.ts => deno run --allow-net http.ts

/**
  Ignore any errors stating `Deno` or something related to it is broken or missing, or if code syntax color gets derailed. Its because vscode-deno (extension) is having a hard day at work!
  If there are any actual errors it would be printed onto the terminal itself.
 */

import { serve } from "https://deno.land/std@0.78.0/http/server.ts";

const server = serve({ port: 9001 });

// top-level await, deferring the need for any `async` IIFE
for await (const req of server) {
  req.respond({ body: "DENO" });
}
