const router = require("express").Router();
const example = require("./example");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// loads environment variables from a .env file into process.env.
require("dotenv").config();

const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;

if (!issuer || !audience) {
  throw new Error("Please make sure that .env is in place and populated");
}

// setup jwt with auth0
const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 100,
    jwksUri: `${issuer}.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: issuer,
  algorithms: ["RS256"],
});

// api routes, add jwtCheck to require authentication
router.use("/example", jwtCheck, example);

// unauthenticated apis
router.use("/open/example", example);

module.exports = router;
