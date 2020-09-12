var Sequelize = require("sequelize");
var { StringColumn, DateColumn } = require("./../utils");

const dateColumn = DateColumn("Must to enter an Date", false);

const descriptionColumn = StringColumn("Please enter a description");

const startTimeColumn = StringColumn("Please enter the start time");

const endTimeColumn = StringColumn("Please enter the end time");

const locationColumn = StringColumn("Please enter the location");

const plannerEmailColumn = {
	...StringColumn("Please enter an email"),
	validate: {
		isEmail: {
			msg: "Please enter a valid email format: example@gmail.com ",
		},
	},
};

module.exports = function (sequelize) {
	var Event = sequelize.define("Event", {
		date: dateColumn,
		description: descriptionColumn,
		start_time: startTimeColumn,
		end_time: endTimeColumn,
		location: locationColumn,
		planner_email: plannerEmailColumn,
	});

	Event.associate = function (models) {
		Event.hasMany(models.Participant, {
			onDelete: "cascade",
		});

		models.Participant.belongsTo(Event);
	};

	return Event;
};
