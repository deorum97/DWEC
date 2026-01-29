var express = require("express");
var router = express.Router();

let UserService = require("../service/user-services");

router.get("/:nombre", async (req, res, next) => {
  const user = await UserService.getByNombre(req.params.nombre);
  res.json(user);
});

router.get("/", async function (req, res, next) {
  const user = await UserService.get();
  res.json(user);
});

router.post("/login/", async function (req, res, next) {
  const user = await UserService.login(req.body.name, req.body.password);
  res.status(201).json(user);
});
router.post("/register/", async function (req, res, next) {
  const user = await UserService.register(
    req.body.name,
    req.body.password,
    req.body.admin,
  );
  if (user === false) {
    return res.status(409).json({ message: "Usuario ya existe" });
  } else {
    res.status(201).json(user);
  }
});

router.delete("/:id", async (req, res) => {
  const user = await UserService.delete(req.params.id);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const user = await UserService.update(
    req.params.id,
    req.body.name,
    req.body.password,
    req.body.admin,
  );
  res.json(user);
});

module.exports = router;
