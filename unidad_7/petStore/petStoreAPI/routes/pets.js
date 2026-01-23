var express = require("express");
var router = express.Router();

let PetService = require("../service/pet-services");

router.get("/:id", async (req, res, next) => {
  const pet = await PetService.getById(req.params.id);
  res.json(pet);
});

router.get("/", async function (req, res, next) {
  const pet = await PetService.get();
  res.json(pet);
});

router.post("/", async function (req, res, next) {
  const pet = await PetService.post(
    req.body.nombre,
    req.body.raza,
    req.body.foto,
    req.body.descripcion,
  );
  res.status(201).json(pet);
});

router.delete("/:id", async (req, res) => {
  const pet = await PetService.delete(req.params.id);
  res.json(pet);
});

router.put("/:id", async (req, res) => {
  const pet = await PetService.update(req.params.id, req.body.descripcion);
  res.json(pet);
});

module.exports = router;
