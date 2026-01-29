var express = require("express");
var router = express.Router();

let CocheService = require("../service/coche-services");

router.get("/:id", async (req, res, next) => {
  const coche = await CocheService.getById(req.params.id);
  res.json(coche);
});

router.get("/", async function (req, res, next) {
  const coche = await CocheService.get();
  res.json(coche);
});

router.post("/", async function (req, res, next) {
  const coche = await CocheService.post(
    req.body.marca,
    req.body.modelo,
    req.body.year,
    req.body.precio,
    req.body.imagen,
  );
  res.status(201).json(coche);
});

router.delete("/:id", async (req, res) => {
  const coche = await CocheService.delete(req.params.id);
  res.json(coche);
});

router.put("/:id", async (req, res) => {
  const coche = await CocheService.update(
    req.params.id,
    req.body.marca,
    req.body.modelo,
    req.body.year,
    req.body.precio,
    req.body.imagen,
  );

  res.json(coche);
});

module.exports = router;
