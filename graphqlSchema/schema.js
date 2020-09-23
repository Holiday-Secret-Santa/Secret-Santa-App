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
		id: Int,
		date: String,
		description: String,
		start_time: String,
		end_time: String,
		location: String,
		planner_email: String,
	}

	input InputParticipant {
		first_name: String,
		last_name: String,
		email: String,
		invite_status: String,
		date_sent: String,
		date_accepted: String,
		EventId: Int,
		secret_santa_id: Int
	}

	type Participant {
		id: Int,
		first_name: String,
		last_name: String,
		email: String,
		invite_status: String,
		date_sent: String,
		date_accepted: String,
		EventId: Int,
		secret_santa_id: Int
	}

	input InputGift {
		description: String,
		link: String,
		price: Int,
		Participant_id: Int
	}

	type Gift {
		id: Int,
		description: String,
		link: String,
		price: Int,
		Participant_id: Int
	}
	
	type Query {
		getEvents: [Event],
		getEvent(id: Int): Event, 
		getParticipants: [Participant],
		getParticipant(id: Int): Participant,
		getParticipantsByEventId(EventId: Int): [Participant],
		getGifts: [Gift],
		getGift(id: Int): Gift,
		getGiftByParticipantId(Participant_id: Int): [Gift],
		
	}

	type Mutation {
		createEvent(input: InputEvent): Event,
		deleteEvent(id: Int): Int,
		createParticipant(input: InputParticipant): Participant,
		deleteParticipant(id: Int): Int
		createGift(input: InputGift): Gift,
		deleteGift(id: Int): Int
	
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
	getParticipants: () => {
		return db.Participant.findAll();
	},
	getParticipantsByEventId: ({ EventId }) => {
		return db.Participant.findAll({ where: { EventId: EventId } });
	},
	getParticipant: ({ id }) => {
		return db.Participant.findOne({ where: { id: id } });
	},
	createParticipant: ({ input }) => {
		return db.Participant.create(input);
	},
	deleteParticipant: ({ id }) => {
		return db.Participant.destroy({ where: { id: id } });
	},
	getGifts: () => {
		return db.Gift.findAll();
	},
	getGift: ({ id }) => {
		return db.Gift.findOne({ where: { id: id } });
	},
	createGift: ({ input }) => {
		return db.Gift.create(input);
	},
	deleteGift: ({ id }) => {
		return db.Gift.destroy({ where: { id: id } });
	},
	getGiftByParticipantId: ({ Participant_id }) => {
		return db.Gift.findAll({
			where: { Participant_id: Participant_id },
		});
	},
};

module.exports = {
	schema,
	root,
};
