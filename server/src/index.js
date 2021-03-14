const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());

// init express aplication
const serverPort = 3001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
app.use(express.static(staticServerPath));

// api

app.post("/card", (req, res) => {
  // console request body params
  console.log("REQ", req, "RES", res);
  //   console.log(
  //     `Creating the user in database with user name: "${req.body.userName}"`
  //   );
  const response = {
    result: `User created: ${req.body.userData}`,
  };
  res.json(response);
});

app.get("/card/card", (req, res) => {
  // app.get("/card/id/", (req, res) => {
  const response = "holi";
  console.log(response);
  res.json(response);
});
