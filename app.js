const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const colors = require('colors');
const banner = require("./cmd/serverd/banner/banner");

const PORT = 3000
const app = new Koa()
const router = new KoaRouter()

banner.consoleLog()

app.use(json())

// Simple middleware example

router.get('/home', ctx => (ctx.body = {Text: "Welcome to Koa"}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => console.log('Server running'.yellow));
