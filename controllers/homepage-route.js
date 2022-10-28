const router=require('express').Router();
const {Post} = require('../models')

router.get('/', async (req, res) => {
    try{
        const dbPost = await Post.findAll();

        const post = dbPost.map((post) => 
            post.get({plain: true})
        );

        res.render('homepage', {
            post,
        });
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;