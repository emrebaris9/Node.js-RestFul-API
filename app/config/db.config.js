const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.products = require('../model/product.model.js')(sequelize, Sequelize);
db.categories = require('../model/category.model.js')(sequelize, Sequelize);
db.topics = require('../model/topic.model.js')(sequelize, Sequelize);
db.auths = require('../model/auth.model.js')(sequelize, Sequelize);
db.comments = require('../model/comment.model.js')(sequelize, Sequelize);
db.contacts = require('../model/contact.model.js')(sequelize, Sequelize);
db.datas = require('../model/data.model.js')(sequelize, Sequelize);

module.exports = db;
