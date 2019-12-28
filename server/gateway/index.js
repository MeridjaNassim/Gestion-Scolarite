const express = require("express");
const app = express();
const port = 8080;
const router = require("./routers/router");
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.get("/", (req, res) => res.send("Gateway for microservices!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
