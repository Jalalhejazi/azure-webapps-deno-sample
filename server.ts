import { Application } from "https://deno.land/x/oak/mod.ts";
import messages        from './messages.ts';



/***********************************************
Define Routing
************************************************/
const app = new Application();

app.use((context:any)  => {
  context.response.body = messages;
});





/***********************************************
await port listning ........
************************************************/

const port = Deno.env.get("PORT") || "8080";
console.log( `Listning on Port ${port} ` );
await app.listen({ port: +port });
