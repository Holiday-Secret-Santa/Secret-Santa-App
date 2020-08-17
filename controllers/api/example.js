const router = require("express").Router();
var db = require("../../models/sql");
const jwt_decode = require("jwt-decode");

// example auth0 get Email function
const getEmail = (token) => {
	decoded = jwt_decode(token);
	return decoded["https://url/email"];
};
