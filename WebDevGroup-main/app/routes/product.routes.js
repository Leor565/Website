module.exports = app => {

  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", products.create);

  // Retrieve all Products
  router.get("/", products.findAll);

  // Retrieve a single Product with id
  router.get("/:id", products.findOne);

  // Update a Product with id
  router.put("/:id", products.update);

  // Delete a Product with id
  router.delete("/:id", products.delete);

  // Delete all Products
  router.delete("/", products.deleteAll);

   // New routes for finding, updating, and deleting products by title
  // Retrieve a single Product with title
  router.get("/title/:title", products.findOneByTitle);

  // Update a Product with title
  router.put("/title/:title", products.updateByTitle);

  // Delete a Product with title
  router.delete("/title/:title", products.deleteByTitle);

  app.use('/api/products', router);
};