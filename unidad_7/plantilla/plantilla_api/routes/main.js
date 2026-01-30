var express = require("express");
var router = express.Router();

let MainService = require("../service/main-services");

router.get("/:id", async (req, res, next) => {
  const main = await MainService.getById(req.params.id);
  res.json(main);
});

router.get("/", async function (req, res, next) {
  const main = await MainService.get();
  res.json(main);
});

router.post("/", async function (req, res, next) {
  const main = await MainService.post(
    req.body.name,
    req.body.description,
    req.body.price,
  );
  res.status(201).json(main);
});

router.delete("/:id", async (req, res) => {
  const main = await MainService.delete(req.params.id);
  res.json(main);
});

router.put("/:id", async (req, res) => {
  const main = await MainService.update(
    req.params.id,
    req.body.name,
    req.body.description,
    req.body.price,
  );
  res.json(main);
});

module.exports = router;
