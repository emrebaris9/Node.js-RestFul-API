module.exports = (sequelize, Sequelize) => {
	const comment = sequelize.define('comments', {
		topicName: {
			type: Sequelize.STRING
		},
		commentName: {
			type: Sequelize.STRING
		},
		commentMail: {
			type: Sequelize.STRING
		},
		commentHeader: {
			type: Sequelize.STRING
		},
		comment1: {
			type: Sequelize.TEXT
		}
	});
	return comment;
};
