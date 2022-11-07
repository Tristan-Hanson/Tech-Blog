const router=require('express').Router();
const homepage = require('./homepage-route');
const loginRoutes = require('./login-route');

router.use('/login', loginRoutes);
router.use('/', homepage);

module.exports=router;