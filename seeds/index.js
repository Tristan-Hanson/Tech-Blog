const sequelize = require('../config/connect');
const seedPost = require('./post-seed');
const seedUser = require('./user-seeds')

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedUser();
    console.log('SeedUser_____')
    await seedPost();
    console.log('SeedPost_____')
}

seedAll();
