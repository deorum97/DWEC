var express = require("express");
var router = express.Router();

let Libro = require("../models/libro");
let arrayLibros = [];
let contador = 0;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(arrayLibros);
});

router.post("/", function (req, res, next) {
  const libro = new Libro(
    contador,
    req.body.titulo,
    req.body.autor,
    req.body.anio
  );
  arrayLibros.push(libro);
  contador++;
  res.status(201).json(libro);
});

router.delete("/:id", (req, res) => {
  let arrayLibrosFiltrado = arrayLibros.filter(
    (x) => parseInt(x.id) != parseInt(req.params.id)
  );
  if (arrayLibrosFiltrado.length === arrayLibros.length) {
    res.status(404).send("Not Found");
  } else {
    arrayLibros = arrayLibrosFiltrado;
    res.send(true);
  }
});

module.exports = router;
