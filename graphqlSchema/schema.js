const { buildSchema } = require("graphql");
const { random } = require("lodash");
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
		planner_first_name: String,
		planner_last_name: String,
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
		EventId: Int,
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
	type ParticipantSanata {
		participant_id: Int,
		secret_santa_id: Int
	}
	input InputGift {
		description: String,
		link: String,
		price: Float,
		ParticipantId: Int
	}
	type Gift {
		id: Int,
		description: String,
		link: String,
		price: Float,
		ParticipantId: Int
	}
	type Query {
		getEvents: [Event],
		getEvent(id: Int): Event,
		getParticipants: [Participant],
		getParticipant(id: Int): Participant,
		getParticipantsByEventId(eventId: Int): [Participant],
		getGifts: [Gift],
		getGift(id: Int): Gift,
		getGiftByParticipantId(participant_id: Int): [Gift],
		getEventsByOrganizerEmail (email: String): [Event],
		getEventsByParticipantEmail (email: String): [Event],
		getParticipantByEventIdAndEmail (eventId: Int, email: String): Participant
	}
	type Mutation {
		createEvent(input: InputEvent): Event,
		deleteEvent(id: Int): Int,
		createParticipant(input: InputParticipant): Participant,
		deleteParticipant(id: Int): Int,
		createGift(input: InputGift): Gift,
		deleteGift(id: Int): Int,
		assignSecretSanta(participant_id: Int, secret_santa_id: Int): [Int],
		autoAssignSecretSanta(eventId: Int): [ParticipantSanata],
	}

`);
const getParticipantsByEventId = (eventId) => {
	return db.Participant.findAll({ where: { EventId: eventId } });
};

const createParticipantObject = (input) => {
	db.Participant.create({
		first_name: input.first_name,
		last_name: input.last_name,
		email: input.email,
		invite_status: "Invited",
		date_sent: new Date(),
		EventId: input.EventId,
	});
};

var root = {
	getEvents: () => {
		return db.Event.findAll();
	},
	getEvent: ({ id }) => {
		return db.Event.findOne({ where: { id: id } });
	},
	createEvent: async ({ input }) => {
		let createdEvent = await db.Event.create(input);
		let EventId = createdEvent.dataValues.id;
		let { planner_email, planner_first_name, planner_last_name } = input;
		let participantInput = {
			first_name: planner_first_name,
			last_name: planner_last_name,
			email: planner_email,
			EventId: EventId,
		};
		createParticipantObject(participantInput);
		return createdEvent;
	},
	deleteEvent: ({ id }) => {
		return db.Event.destroy({ where: { id: id } });
	},
	getParticipants: () => {
		return db.Participant.findAll();
	},
	getParticipantsByEventId: ({ eventId }) => {
		return getParticipantsByEventId(eventId);
	},
	getParticipant: ({ id }) => {
		return db.Participant.findOne({ where: { id: id } });
	},
	createParticipant: ({ input }) => {
		return createParticipantObject(input);
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
	getGiftByParticipantId: ({ participant_id }) => {
		return db.Gift.findAll({
			where: { ParticipantId: participant_id },
		});
	},
	assignSecretSanta: ({ participant_id, secret_santa_id }) => {
		return db.Participant.update(
			{ secret_santa_id: secret_santa_id },
			{
				where: {
					id: participant_id,
				},
			}
		);
	},
	autoAssignSecretSanta: async ({ eventId }) => {
		let results = await getParticipantsByEventId(eventId);
		if (results.length < 2) return [];
		const participantIds = results.map((r) => r.dataValues.id);
		var availableSantas = [...participantIds];
		return participantIds.map((p, i) => {
			var santaIndex = 0;
			do {
				santaIndex = random(Math.max(availableSantas.length - 1, 0));
			} while (availableSantas[santaIndex] === p && availableSantas.length > 1);
			let santa_id = availableSantas.splice(santaIndex, 1)[0];
			return {
				participant_id: p,
				secret_santa_id: santa_id,
			};
		});
	},
	getEventsByOrganizerEmail: ({ email }) => {
		return db.Event.findAll({
			where: {
				planner_email: email,
			},
		});
	},
	getEventsByParticipantEmail: ({ email }) => {
		return db.Event.findAll({
			include: [
				{
					model: db.Participant,
					where: { email: email },
				},
			],
		});
	},
	getParticipantByEventIdAndEmail: ({ eventId, email }) => {
		return db.Participant.findOne({
			where: {
				EventId: eventId,
				email: email,
			},
		});
	},
};
module.exports = {
	schema,
	root,
};
