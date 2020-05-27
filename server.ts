/*****************************************
// DRY: Separations

import router from './routes.ts'

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())
*******************************************/

import { Application, Context } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import router                   from './routes.ts';
import messages                 from './messages.ts';

const app = new Application();

app.use((ctx: any) => {
  ctx.response.body = messages;
});


const port = Deno.env.get("PORT") || "8080";
console.log( `Listning on Port ${port} ` );
await app.listen({ port: +port });
