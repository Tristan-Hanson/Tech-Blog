const router=require('express').Router();
const homepage = require('./homepage-route');
const loginRoutes = require('./login-route');
const dashboard = require('./dashboard-route');
const { Post,User} = require('../models');
const { Op } = require('sequelize');

router.use('/login', loginRoutes);
router.use('/', homepage);
router.use('/dashboard', dashboard)

module.exports=router;