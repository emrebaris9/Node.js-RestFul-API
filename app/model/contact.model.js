module.exports = (sequelize, Sequelize) => {
    const contact = sequelize.define('contacts', {
        fname: {
            type: Sequelize.STRING
        },
        lname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.TEXT
        }
    });
    return contact;
};
