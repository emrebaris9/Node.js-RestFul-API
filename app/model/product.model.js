module.exports = (sequelize, Sequelize) => {
	const product = sequelize.define('products', {
		name: {
			type: Sequelize.STRING
		},
		piece: {
			type: Sequelize.INTEGER
		},
		price: {
			type: Sequelize.INTEGER
		},
		categoryId: {
			type: Sequelize.INTEGER
		},
		desc: {
			type: Sequelize.STRING
		},
		imageUrl: {
			type: Sequelize.STRING
		}
	});
	return product;
}
