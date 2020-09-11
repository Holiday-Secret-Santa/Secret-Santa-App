var DataTypes = require("sequelize/lib/data-types");

const firstNameColumn = {
	type: DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the first_name",
		},
	},
};

const lastNameColumn = {
	type: DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the last_name",
		},
	},
};

const emailColumn = {
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

const secretSantaColumn = {
	type: DataTypes.INTEGER,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the secret santa",
		},
	},
};

const inviteStatusColumn = {
	type: DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the invite status",
		},
	},
};

const dateSentColumn = {
	type: DataTypes.DATE,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Must to enter the sent date",
		},
		isDate: true,
	},
};

const dateAcceptedColumn = {
	type: DataTypes.DATE,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Must to enter the date accepted",
		},
		isDate: true,
	},
};

module.exports = function (sequelize, DataTypes) {
	var Participant = sequelize.define("Participant", {
		first_name: firstNameColumn,
		last_name: lastNameColumn,
		email: emailColumn,
		secret_santa: secretSantaColumn,
		invite_status: inviteStatusColumn,
		date_sent: dateSentColumn,
		date_accepted: dateAcceptedColumn,
	});
	return Participant;
};
