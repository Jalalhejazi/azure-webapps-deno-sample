import { Application, Context } from "https://deno.land/x/oak@v4.0.0/mod.ts";

const app = new Application();
const message = "Hello World,\r Using Deno running inside a docker container ☁️🦕☁️🦕☁️🦕☁️☁️🦕🦕🦕";

app.use((ctx: any) => {
  ctx.response.body = message;
  //console.log(`request received: ${ctx.request.url}`);
});

const port = Deno.env.get("PORT") || "8080";
//console.log(`Starting server at port: ${port}`);
await app.listen({ port: +port });
