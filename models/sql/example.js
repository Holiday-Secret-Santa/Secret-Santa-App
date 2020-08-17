module.exports = function (sequelize, DataTypes) {
	// creating table example
	var Example = sequelize.define("Example", {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Must to enter an email",
				},
			},
			validate: {
				isEmail: {
					msg: "Please enter a valid email format: example@gmail.com ",
				},
			},
		},
	});

	return Example;
};
