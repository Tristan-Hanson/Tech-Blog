const router=require('express').Router();
const homepage = require('./homepage-route');

router.use('homepage', homepage)

module.exports=router;