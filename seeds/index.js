const sequelize = require('../config/connect');
const seedPost = require('./post-seed');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedPost();
}

seedAll();