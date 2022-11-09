const router=require('express').Router();
const homepage = require('./homepage-route');
const loginRoutes = require('./login-route');
const dashboard = require('./dashboard-route');
const postRoutes = require('./post-route')

router.use('/login', loginRoutes);
router.use('/', homepage);
router.use('/dashboard', dashboard)
router.use('/post', postRoutes)

module.exports=router;