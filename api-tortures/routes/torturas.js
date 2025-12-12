var express = require("express");
var router = express.Router();
let Tortura = require("../modules/torturesModel");
const arrayTorturas = [];
let contador = 0;

router.get("/:id", (req, res) => {
  let tortura = arrayTorturas.filter((x) => x.id == req.params.id);
  if (tortura.length === 0) {
    return res.status(404).send("not found");
  } else {
    req.status(200).json(tortura);
  }
});

router.get("/", function (req, res, next) {
  res.status(200).json(arrayTorturas);
});

router.post("/", function (req, res, next) {
  const tortura = new Tortura(
    contador,
    req.body.nombre,
    req.body.annioCreacion,
    req.body.mortal,
    req.body.url,
    req.body.dolor
  );
  contador++;
  arrayTorturas.push(tortura);
  res.status(201).json(tortura);
});

router.delete("/:id", (req, res) => {
  let torturaFiltrado = arrayTorturas.filter((x) => x.id != req.params.id);
  if (torturaFiltrado.length === arrayTorturas.length) {
    return res.status(404).send("not found");
  } else {
    arrayTorturas = torturaFiltrado;
    req.send(true);
  }
});

router.put("/:id", (req, res) => {
  let tortura = undefined;
  for (let index = 0; index < arrayTorturas.length; index++) {
    if (parseInt(req.params.id) === arrayTorturas[index].id) {
      tortura = new Tortura(
        arrayTorturas[index].id,
        req.body.nombre,
        req.body.annioCreacion,
        req.body.mortal,
        req.body.url,
        req.body.dolor
      );
      arrayTorturas[index] = tortura;
      res.json(tortura);
    }
  }

  if (!tortura) {
    res.status(400).send("not found");
  }
});

module.exports = router;
