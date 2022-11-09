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

//user post routes
router.put('/', async (req, res) =>{
   try{
    let update = await Post.update(
        {
            text: req.body.text
        },
        {
            where: {
                title: req.body.title
            }
        }
    );
     res.status(200).json(update);
   } catch(err){
    res.status(500).json(err);
   }
})

router.delete('/', async (req, res) =>{
    console.log(req.body)
    try{
        let data = await Post.destroy({
            where: {
                title: req.body.title
            }
        }).then (() => {
            res.status(204).end();
            res.render('dashboard')
           });
    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router;