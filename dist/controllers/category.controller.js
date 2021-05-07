const category = require("../models/category");
const Category = require("../models/category");

module.exports = {
  create(req, res) {
    return Category.create({
      name: req.body.name
    }).then(category => res.status(201).send(category)).catch(error => res.status(400).send(error));
  }
};