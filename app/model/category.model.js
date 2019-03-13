module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
    });
    return Category;
};
