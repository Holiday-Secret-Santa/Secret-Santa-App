// added (express npm) =>  Minimalist web framework for node.
const express = require("express");
// added (morgan npm) =>  HTTP request logger middleware for node.js
const morgan = require("morgan");
// added (morgan npm) =>  HTTP request logger middleware for node.js
const logger = require("morgan");
// added (mongoose npm) => object modeling tool designed to work in an asynchronous environment in case we need it
const mongoose = require("mongoose");
// added required controller to the server
const routes = require("./controllers");

// created the App
const app = express();
