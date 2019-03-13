module.exports = (sequelize, Sequelize) => {
    return sequelize.define('auth', {
        userName: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING
        },
    });
};
