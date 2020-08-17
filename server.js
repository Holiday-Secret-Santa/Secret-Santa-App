// added (express npm) =>  Minimalist web framework for node.
const express = require("express");
// added (morgan npm) =>  HTTP request logger middleware for node.js
const morgan = require("morgan");
// added (mongoose npm) => object modeling tool designed to work in an asynchronous environment in case we need it
const mongoose = require("mongoose");
// added required controller to the server
const routes = require("./controllers");
// creating an express application
const app = express();
// loads environment variables from a .env file into process.env.
require("dotenv").config();
// conneting models to server
var db = require("./models");

const PORT = process.env.PORT || 3001;
const appOrigin = process.env.APP_ORIGIN;

app.use(morgan("dev"));

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
