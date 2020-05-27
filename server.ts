/*****************************************************************************
   DevOps: Can Deploy this version to azure
   
   Deno is NOT ready to Production yet !!!
   
   Deno can be used in education and Training in 2020
   
*****************************************************************************/

import { Application, Context } from "https://deno.land/x/oak/mod.ts";
import router                   from './routes.ts';
import messages                 from './messages.ts';



/***********************************************
Define Routing
************************************************/
const app = new Application();
//app.use(router.routes())
//app.use(router.allowedMethods())

app.use((ctx: any) => {
  ctx.response.body = messages;
});





/***********************************************
await port listning ........
************************************************/

const port = Deno.env.get("PORT") || "8080";
console.log( `Listning on Port ${port} ` );
await app.listen({ port: +port });
