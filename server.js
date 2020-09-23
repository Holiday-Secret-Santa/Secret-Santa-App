// added (express npm) =>  Minimalist web framework for node.
const express = require("express");
// added (morgan npm) =>  HTTP request logger middleware for node.js
const morgan = require("morgan");
// added required controller to the server
const routes = require("./controllers");
// creating an express application
const app = express();
// loads environment variables from a .env file into process.env.
require("dotenv").config();
// require models
var db = require("./models");
const { graphqlHTTP } = require("express-graphql");
const { schema, root } = require("./graphqlSchema/schema");

const PORT = process.env.PORT || 3001;
const appOrigin = process.env.APP_ORIGIN;

app.use(morgan("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// set the middleware for graphql - express (to handle the request)
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

// Add routes, both API and view
app.use(routes);

// Start the API server
// Sequelize connection
db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});
