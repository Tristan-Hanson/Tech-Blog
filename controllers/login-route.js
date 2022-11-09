const router = require('express').Router();
const { Op } = require('sequelize');
const { User } = require('../models');

// CREATE new user

router.get('/', async (req,res)=>{
  res.render("login");
});

router.post('/create', async (req,res)=>{
    let data = await  User.create(req.body);
    console.log(data);
    req.session.save( () =>{
      req.session.isLoggedIn = true;
      res.redirect("/dashboard");
    });
});

// //Login


 router.post('/login', async (req, res) => {
   let data = await User.findOne({
     where:{
       email:{
         [Op.eq]:req.body['email-login']
       }
     }
   })
   if(data){
     if(data.checkPassword(req.body['password-login'])){
       req.session.save( () =>{
         req.session.isLoggedIn = true;
         req.session.uID = data.id;
         res.redirect("/dashboard");
       });
     }
   }else{
     res.redirect('/login');
   }
 });

 router.get('/logout', async(req,res) =>{
  if(req.session.isLoggedIn){
    req.session.destroy( () =>{
      res.status(200).end();
      console.log("logged out")
    });
  }
  res.render('homepage')
});

module.exports = router