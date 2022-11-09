const router=require('express').Router();
const { Op } = require('sequelize');
const { Post,User} = require('../models');

router.get("/", async (req,res) =>{
    console.log(req.sessionID);
    console.log(req.session.isLoggedIn);
    req.session.touch();
    if(req.session.isLoggedIn){
        let data = await Post.findAll({
            raw: true,
            where: {
                creator_id:{
                    [Op.eq]: req.session.uID
                }
            }
        });
        // console.log(data);
        res.render('dashboard',{loggedIn:req.session.isLoggedIn,posts: data});
    }else{
        console.log('fail')
        res.redirect('/login');
    }
});


module.exports = router;