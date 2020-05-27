/*
import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

const port = Deno.env.get("PORT") || "8080";
console.log(`Server running on port ${port}`)

await app.listen({ port: +port });
*/

import { Application, Context } from "https://deno.land/x/oak@v4.0.0/mod.ts";

const app = new Application();

const hello = 'Hello World,';
const about = 'Using Deno running inside a docker container.';
const unicodes = '☁️🦕☁️🦕☁️🦕☁️☁️🦕🦕🦕';

const message = `${hello}\r${about}\r${unicodes}`;

app.use((ctx: any) => {
  ctx.response.body = message;
});


const port = Deno.env.get("PORT") || "8080";
console.log( `Listning on Port ${port} ` );
await app.listen({ port: +port });
