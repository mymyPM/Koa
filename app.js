const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const colors = require('colors');
const banner = require("./cmd/serverd/banner/banner");

const PORT = 3000;
const app = new Koa();
const router = new KoaRouter();

banner.consoleLog();

app.use(json());

// Simple middleware example

router.get('/home', ctx => (ctx.body = {Text: "Welcome to Koa"}));
router.get('/test-context-object', ctx => {
    console.log(ctx.request)
    ctx.body = {text: "Context Object in Koa"}
    console.log(ctx.response)
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log('Server running'.yellow));
