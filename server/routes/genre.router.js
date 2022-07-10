//requires
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  //get all genres from the DB
  const query = ` SELECT (genres.name) FROM genres JOIN movies_genres ON genres.id = movies_genres.genre_id WHERE movie_id = $1;`;
  const values = [req.query.id];
  pool
    .query(query, values)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("error GETting genres", err);
      res.sendStatus(500);
    });
});

module.exports = router;
