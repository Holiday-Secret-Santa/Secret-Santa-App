var Sequelize = require("sequelize");

const StringColumn = (msg, allowNull) => {
	return {
		type: Sequelize.DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: msg,
			},
		},
	};
};

const DateColumn = (msg, allowNull) => {
	return {
		type: Sequelize.DataTypes.DATE,
		allowNull: allowNull,
		validate: {
			isDate: true,
		},
	};
};

const DefineTable = (sequelize, name, columns) => {
	return sequelize.define(name, columns);
};

module.exports = {
	StringColumn,
	DateColumn,
	DefineTable,
};
