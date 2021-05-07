const categoryController = require("../controllers").categories;

module.exports = ctx => {
    ctx.get("/api", ctx => ctx.status(200).send({
        message: "Welcome"
    }));
    app.post("/api/categories", categoryController.create);
};