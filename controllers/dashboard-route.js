const router=require('express').Router();

router.get('/', (req, res) =>{
    console.log(req.session.isLoggedIn)
    res.render('dashboard', {sesh: req.session})
})

module.exports = router;