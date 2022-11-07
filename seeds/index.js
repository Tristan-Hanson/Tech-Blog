const sequelize = require('../config/connect');
const seedPost = require('./post-seed');
const userPost = require('./user-seeds')

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedPost();
    console.log('SeedPost_____')
    await userPost();
    console.log('SeedUser_____')
}

seedAll();