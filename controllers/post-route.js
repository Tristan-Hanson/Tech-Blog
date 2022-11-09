const router=require('express').Router();
const Post = require('../models/post');

router.get("/", async (req,res) =>{
    res.render('post')
});

router.post("/", async (req,res) =>{
        req.body['creator_id']=req.session.uID;
        let dat = await Post.create(req.body)
        res.redirect("/dashboard");
});



module.exports=router;