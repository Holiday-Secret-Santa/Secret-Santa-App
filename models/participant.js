var Sequelize = require("sequelize");
var { StringColumn, DateColumn, DefineTable } = require("./../utils");

const firstNameColumn = StringColumn("Please enter the first_name");

const lastNameColumn = StringColumn("Please enter the last_name");

const emailColumn = {
	...StringColumn("Please enter an email"),
	validate: {
		isEmail: {
			msg: "Please enter a valid email format: example@gmail.com ",
		},
	},
};

const inviteStatusColumn = StringColumn("Please enter the invite status");

const dateSentColumn = DateColumn("Must to enter the sent date", true);

const dateAcceptedColumn = DateColumn("Must to enter the date accepted", true);

module.exports = function (sequelize) {
	var Participant = DefineTable(sequelize, "Participant", {
		first_name: firstNameColumn,
		last_name: lastNameColumn,
		email: emailColumn,
		invite_status: inviteStatusColumn,
		date_sent: dateSentColumn,
		date_accepted: dateAcceptedColumn,
	});

	Participant.associate = function (models) {
		Participant.hasOne(models.Participant, {
			foreignKey: "secret_santa_id",
		});
	};

	return Participant;
};
