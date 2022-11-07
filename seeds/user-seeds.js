const { User } = require('../models');

const userData = [
  {
    username: 'John',
    password: 'Password123',
  },
  {
    username: 'Mary',
    password: 'NewPassword',
  },
  {
    username: 'Alex',
    password: 'OldPassword',
  },

];

const seedUsers = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = seedUsers;