module.exports = (sequelize, Sequelize) => {
	const data = sequelize.define('datas', {
		p: {
			type: Sequelize.STRING
		},
		qs: {
			type: Sequelize.STRING
		},
		r: {
			type: Sequelize.STRING
		},
		i: {
			type: Sequelize.STRING
		},
		lt: {
			type: Sequelize.STRING
		},
		ln: {
			type: Sequelize.STRING
		}
	});
	return data;
};
