var express = require("express");
var router = express.Router();

let SongService = require("../service/song-services");

router.get("/:id", async (req, res, next) => {
  const song = await SongService.getById(req.params.id);
  res.json(song);
});

router.get("/", async function (req, res, next) {
  const song = await SongService.get();
  res.json(song);
});

router.post("/new", async function (req, res, next) {
  const song = await SongService.post(
    req.body.title,
    req.body.duration,
    req.body.rating,
    req.body.albumId,
    req.body.listened,
  );
  res.status(201).json(song);
});

router.delete("/:id", async (req, res) => {
  const song = await SongService.delete(req.params.id);
  res.json(song);
});

router.put("/:id", async (req, res) => {
  const song = await SongService.update(
    req.params.id,
    req.body.title,
    req.body.duration,
    req.body.rating,
    req.body.albumId,
    req.body.listened,
  );
  res.json(song);
});

module.exports = router;
