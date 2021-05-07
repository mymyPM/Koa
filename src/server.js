const Koa = require("koa");
const app = new Koa();
require("dotenv").config();
app.use(async ctx => {
    ctx.body={message:"Hello"};
});
require("./routers")(app);
app.get('*', (req,res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(process.env.PORT || 1234);
module.exports=app;