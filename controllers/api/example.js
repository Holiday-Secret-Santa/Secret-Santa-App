const router = require("express").Router();
var db = require("../../models/sql");
const jwt_decode = require("jwt-decode");

// example auth0 get Email function
const getEmail = (token) => {
	decoded = jwt_decode(token);
	return decoded["https://url/email"];
};

router.get("/", function (req, res) {
	let email = getEmail(req.headers.authorization);
	db.Example.findAll({
		where: {
			email: email,
		},
	}).then(function (dbAllExample) {
		res.json(dbAllExample);
	});
});

module.exports = router;
