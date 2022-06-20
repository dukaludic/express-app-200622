const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "wooorld" });
});

const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
