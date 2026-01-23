var express = require("express");
var router = express.Router();

let Task = require("../model/task");
let TaskService = require("../service/task-services");
let arrayTasks = [];

router.get("/:id", async (req, res, next) => {
  const task = await TaskService.getById(req.params.id);
  res.json(task);
});

router.get("/", async function (req, res, next) {
  const task = await TaskService.get();
  res.json(task);
});

router.post("/", async function (req, res, next) {
  const task = await TaskService.post(
    req.body.nombre,
    req.body.fecha,
    req.body.descripcion,
  );
  res.status(201).json(task);
});

router.delete("/:id", async (req, res) => {
  const task = await TaskService.delete(req.params.id);
  res.json(task);
});

router.put("/:id", async (req, res) => {
  const task = await TaskService.update(req.params.id, req.body.descripcion);
  res.json(task);
});

module.exports = router;
