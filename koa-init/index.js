const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const koaBody = require("koa-body");
const json = require("koa-json");
const app = new Koa();
const router = new Router();

router.prefix("/api");
router.get("/", (ctx) => {
  console.log(ctx);
  ctx.body = "Hello World";
});

router.get("/ai", (ctx) => {
  console.log(ctx);
  ctx.body = "Hello World";
});

router.get("/api", (ctx) => {
  const params = ctx.request.query;
  console.log(params);
  ctx.body = {name:params.name}
});
router.get("/async", async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(function () {
      resolve("2s");
    }, 2000);
  });
  ctx.body = result;
});

router.post("/post", async (ctx) => {
  let { body } = ctx.request;
  console.log(body);
  ctx.body = { ...body };
});
app.use(koaBody());
app.use(json({pretty:false,param:'pretty'}))
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
