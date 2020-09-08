const router = require("express").Router();
const jwt_decode = require("jwt-decode");

// example auth0 get Email function
const getEmail = (token) => {
  decoded = jwt_decode(token);
  return decoded["https://url/email"];
};

router.get("/", function (req, res) {
  let email = getEmail(req.headers.authorization);
  res.json([]);
});

module.exports = router;
