module.exports = function (sequelize, DataTypes) {
	var Event = sequelize.define("Event", {
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Must to enter an Date",
				},
				isDate: true,
			},
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		start_time: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Please enter the start time",
				},
			},
		},
		end_time: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Please enter the end time",
				},
			},
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Please enterr the location",
				},
			},
		},
		planner_email: {
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
		},
	});

	return Event;
};
