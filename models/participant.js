var Sequelize = require("sequelize");

const firstNameColumn = {
	type: Sequelize.DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the first_name",
		},
	},
};

const lastNameColumn = {
	type: Sequelize.DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the last_name",
		},
	},
};

const emailColumn = {
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

const inviteStatusColumn = {
	type: Sequelize.DataTypes.STRING,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Please enter the invite status",
		},
	},
};

const dateSentColumn = {
	type: Sequelize.DataTypes.DATE,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Must to enter the sent date",
		},
		isDate: true,
	},
};

const dateAcceptedColumn = {
	type: Sequelize.DataTypes.DATE,
	allowNull: false,
	validate: {
		notNull: {
			msg: "Must to enter the date accepted",
		},
		isDate: true,
	},
};

module.exports = function (sequelize) {
	var Participant = sequelize.define("Participant", {
		first_name: firstNameColumn,
		last_name: lastNameColumn,
		email: emailColumn,
		invite_status: inviteStatusColumn,
		date_sent: dateSentColumn,
		date_accepted: dateAcceptedColumn,
	});

	Participant.associate = function (models) {
		Participant.hasOne(models.Participant, {
			onDelete: "cascade",
			foreignKey: "secret_santa_id",
		});
	};

	return Participant;
};
