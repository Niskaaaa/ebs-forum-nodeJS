const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  console.log(ctx);
  ctx.body = "Hello World";
});

router.get("/api", (ctx) => {
  console.log(ctx);
  ctx.body = "Hello api";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
