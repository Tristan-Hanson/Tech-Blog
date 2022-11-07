const router = require('express').Router();
const { Op } = require('sequelize');
const { User } = require('../models');


// CREATE new user

router.get('/', async (req,res)=>{
  // console.log("asdasd");
  res.render("login");
});

// router.post('/create', async (req,res)=>{
//   console.log(req.body);
//   let data = await  User.create(req.body);
//   console.log(data);
//   req.session.save( () =>{
//     req.session.isLoggedIn = true;
//     res.redirect("/homepage");
//   });
// });

// //Login


// router.post('/login', async (req, res) => {
//   let data = await User.findOne({
//     where:{
//       email:{
//         [Op.eq]:req.body['email-login']
//       }
//     }
//   })
//   if(data){
//     if(data.checkPassword(req.body['password-login'])){
//       console.log("good user name and good password");
//       req.session.save( () =>{
//         req.session.isLoggedIn = true;
//         res.redirect("/homepage");
//       });
//     }
//   }else{
//     res.redirect('/user/login');
//   }
// });

module.exports = router