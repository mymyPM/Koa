const categoryController = require("../controllers").categories;

module.exports = (app) => {
    app.get("/api",(req,res) => res.status(200).send({
        message:"Welcome",
    }));
    app.post("/api/categories", categoryController.create);
  };