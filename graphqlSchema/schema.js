const { buildSchema } = require("graphql");
const _ = require("lodash");
const db = require("./../models");

var schema = buildSchema(`
	input InputEvent {
		date: String,
		description: String,
		start_time: String,
		end_time: String,
		location: String,
		planner_email: String,
	}

	type Event {
		id: String,
		date: String,
		description: String,
		start_time: String,
		end_time: String,
		location: String,
		planner_email: String,
	}

	type Query {
		getEvents: [Event],
		getEvent(id: String): Event
	}

	type Mutation {
		createEvent(input: InputEvent): Event,
		deleteEvent(id: String): String
	}
`);

var root = {
	getEvents: () => {
		return db.Event.findAll();
	},
	getEvent: ({ id }) => {
		return db.Event.findOne({ where: { id: id } });
	},
	createEvent: ({ input }) => {
		return db.Event.create(input);
	},
	deleteEvent: ({ id }) => {
		return db.Event.destroy({ where: { id: id } });
	},
};

module.exports = {
	schema,
	root,
};
