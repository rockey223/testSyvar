const express = require("express");
const cors = require("cors");
const app = express();
const contactRouter = require("../router/contactRouter");
const serverless = require('serverless-http')

var corsOptions = {
  //   origin: "*",
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
const errorMiddleware = require("../middleware/errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware to handle errors
app.use(errorMiddleware);

//contact us router
app.use("/.netlify/functions/app", contactRouter);

module.exports.handler =serverless(app);
