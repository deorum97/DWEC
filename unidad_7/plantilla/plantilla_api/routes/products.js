var express = require("express");
var router = express.Router();

let ProductService = require("../service/product-services");

router.get("/:nombre", async (req, res, next) => {
  const product = await ProductService.getByNombre(req.params.nombre);
  res.json(product);
});

router.get("/", async function (req, res, next) {
  const product = await ProductService.get();
  res.json(product);
});

router.post("/", async function (req, res, next) {
  const product = await ProductService.post(
    req.body.name,
    req.body.description,
    req.body.price,
  );
  res.status(201).json(product);
});

router.delete("/:id", async (req, res) => {
  const product = await ProductService.delete(req.params.id);
  res.json(product);
});

router.put("/:id", async (req, res) => {
  const product = await ProductService.update(
    req.params.id,
    req.body.name,
    req.body.description,
    req.body.price,
  );
  res.json(product);
});

module.exports = router;
