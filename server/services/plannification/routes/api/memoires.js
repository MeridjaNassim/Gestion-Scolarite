const express = require("express");
const router = express.Router();
const { Memoire } = require("../../models/Memoire.model");

//// @route GET api/memoires
/// @desc GET all memoires in db conform to a query
/// @access public
router.get("/", (req, res, next) => {
  const query = req.query;
  Memoire.find(query)
    .then(data => {
      res.header("Content-Type", "application/json");
      res.send(JSON.stringify(data, null, 4));
    })
    .then(val => next())
    .catch(err => res.status(400).json({ msg: err.message }));
});
/// @route POST api/memoires/add
/// @desc POST one memoire in db
/// @access public
router.post("/add", (req, res, next) => {
  const { nom } = req.body;
  if (!nom) res.status(400).json({ msg: "Name is required" });
  else {
    const mem = {
      ...req.body
    };
    const memoire = Memoire(mem);
    memoire
      .save()
      .then(data => {
        res.header("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(data, null, 4));
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  }
});
/// @route DELETE api/memoires
/// @desc DELETE all memoires in db conform to a query
/// @access public
router.delete("/delete", (req, res, next) => {
  const query = req.query;
  if (!query) res.status(200).json({ msg: "No Item deleted" });
  else {
    if (query.params.count == undefined) {
      Memoire.deleteOne(query)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({ msg: err.message }));
    } else {
      Memoire.deleteMany(query, query.params.count)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({ msg: err.message }));
    }
  }
});
module.exports = router;
