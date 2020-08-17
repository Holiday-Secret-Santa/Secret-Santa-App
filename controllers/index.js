const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes will start '/api'
router.use("/api", apiRoutes);
