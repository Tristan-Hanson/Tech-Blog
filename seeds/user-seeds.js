const { User } = require('../models');

const userData = [
  {
    username: 'John',
    password: 'Password123',
    email: 'email1@email.com'
  },
  {
    username: 'Mary',
    password: 'password',
    email: 'email2@email.com'
  },
  {
    username: 'Alex',
    password: 'password',
    email: 'email3@email.com'
  },

];

const seedUsers = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = seedUsers;