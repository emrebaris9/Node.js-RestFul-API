module.exports = (sequelize, Sequelize) => {
	const topic = sequelize.define('topics', {
		title: {
			type: Sequelize.STRING
		},
		desc: {
			type: Sequelize.TEXT
		},
		imageUrl: {
			type: Sequelize.STRING
		},
		minute: {
			type:Sequelize.STRING
		}
	});
	return topic;
};
