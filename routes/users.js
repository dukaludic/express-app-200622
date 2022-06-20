const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/new", (req, res) => {
  console.log("new user");
  res.render("users/new", { firstName: "asdsa" });
});

router.post("/", (req, res) => {
  console.log(req.body.firstName, "body");
  res.send("Hi");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send("users list");
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
