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
