const express = require("express");
const cors = require("cors");
const { request } = require("express");

// create server
const app = express();

app.use(cors());

// set express middleware
app.use(express.json());

// init express aplication
const serverPort = process.env.PORT || 3001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
app.use(express.static(staticServerPath));

// api

//app.get("/card/card", (req, res) => {
app.get("/card/:id", (req, res) => {
  const response = "holi";
  // console.log(response);
  res.json(response);
});

app.post("/card", (req, res) => {
  // console request body params
  console.log("REQ", req.body);

  const response = {};

  if (!req.body.name) {
    response.success = false;
    response.error = "Missing name parameter";
  } else if (!req.body.job) {
    response.success = false;
    response.error = "Missing job parameter";
  } else if (!req.body.photo) {
    response.success = false;
    response.error = "Missing photo parameter";
  } else if (!req.body.email) {
    response.success = false;
    response.error = "Missing email parameter";
  } else if (!req.body.phone) {
    response.success = false;
    response.error = "Missing phone parameter";
  } else if (!req.body.linkedin) {
    response.success = false;
    response.error = "Missing linkedin parameter";
  } else if (!req.body.github) {
    response.success = false;
    response.error = "Missing github parameter";
  } else {
    //todo ok -> save to db
    response.success = true;
    response.cardURL = "PONER DIRECCIÓN herokua";
  }

  res.json(response);
  console.log(response);
});
