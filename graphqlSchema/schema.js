const { buildSchema } = require("graphql");
const _ = require("lodash");

// dummy data
var events = [
	{
		id: "1",
		date: "10/08/20",
		description: "test graphql",
		start_time: " 5:00 am",
		end_time: "10:00 am",
		location: "my location",
		planner_email: "ystamaritq@gmail.com",
	},
];

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
		return events;
	},
	getEvent: ({ id }) => {
		return _.find(events, { id });
	},
	createEvent: ({ input }) => {
		let id = events.length + 1;
		let newEvent = { ...input, id: `${id}` };
		events.push(newEvent);
		return newEvent;
	},
	deleteEvent: ({ id }) => {
		_.remove(events, { id });
		return id;
	},
};

module.exports = {
	schema,
	root,
};
