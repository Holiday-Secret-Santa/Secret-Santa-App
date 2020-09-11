var Sequelize = require("sequelize");

const dateColumn = {
	type: Sequelize.DataTypes.DATE,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Must to enter an Date",
		},
		isDate: true,
	},
};

const descriptionColumn = {
	type: Sequelize.DataTypes.TEXT,
	allowNull: false,
};

const startTimeColumn = {
	type: Sequelize.DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the start time",
		},
	},
};

const endTimeColumn = {
	type: Sequelize.DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the end time",
		},
	},
};

const locationColumn = {
	type: Sequelize.DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the location",
		},
	},
};

const plannerEmailColumn = {
	type: Sequelize.DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter an email",
		},
	},
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
