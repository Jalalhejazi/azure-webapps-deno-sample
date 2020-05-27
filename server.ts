import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

const port = Deno.env.get("PORT") || "8080";
console.log(`Server running on port ${port}`)

await app.listen({ port: +port });
