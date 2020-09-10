const dateColumn = {
	type: DataTypes.DATE,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Must to enter an Date",
		},
		isDate: true,
	},
};
const descriptionColumn = {
	type: DataTypes.TEXT,
	allowNull: false,
};
const startTimeColumn = {
	type: DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the start time",
		},
	},
};
const endTimeColumn = {
	type: DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the end time",
		},
	},
};
const locationColumn = {
	type: DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the location",
		},
	},
};
const plannerEmailColumn = {
	type: DataTypes.STRING,
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
module.exports = function (sequelize, DataTypes) {
	var Event = sequelize.define("Event", {
		date: dateField,
		description: descriptionColumn,
		start_time: startTimeColumn,
		end_time: endTimeColumn,
		location: locationColumn,
		planner_email: plannerEmailColumn,
	});
	return Event;
};
