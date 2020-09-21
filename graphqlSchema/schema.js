const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
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

// define the graphql schema
const EventType = new GraphQLObjectType({
	name: "Event",
	fields: () => ({
		id: { type: GraphQLString },
		date: { type: GraphQLString },
		description: { type: GraphQLString },
		start_time: { type: GraphQLString },
		end_time: { type: GraphQLString },
		location: { type: GraphQLString },
		planner_email: { type: GraphQLString },
	}),
});

// define queries
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		event: {
			type: EventType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				// code to get data from db / other source
				return _.find(events, { id: args.id });
			},
		},
	},
});

const schema = new GraphQLSchema({
	query: RootQuery,
});

module.exports = schema;
