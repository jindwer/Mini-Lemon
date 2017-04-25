var express = require('express');
var router = express.Router();
var User = require('../db/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 登录/注册　页面 */
router.get('/login',function(req,res,next){
  res.render('login',{title:'登录/注册'});
});

/* 登录提交 */
router.post('/login',function(req,res,next){
  var uid      = req.body.phone;
  var password = req.body.password;
  res.redirect('/');

  // User.findOne({uid:uid},{fields:{_id:1,password:1,isactive:1}},function(err,r){
  //   console.log(err);
  //   if(r!=null){
  //     if(r.isactive){
  //       if(r.password==password){
  //         res.redirect('/');
  //       }else{
  //         res.redirect('/login');
  //       }
  //     }else{
  //       res.redirect('/login');
  //     }
  //   }else{
  //     res.redirect('/login');
  //   }
  // });
});

/* 注册提交　*/
router.post('/sign',function(req,res,next){
    var uid = req.body.phone;
    var nick= req.body.user;
    var password = req.body.password;
    User.count({uid:uid},function(err,n){
      if(n==0){
        var time = parseInt(new Date().getTime()/1000);
        var user = new User({
          uid:uid,
          nick:nick,
          password:password,
          ctime:time,
          ltime:time
        });
        user.save(function(err,u){
          if(!err){
            res.redirect('/');
          }else{
            res.redirect('/login');
          }
        });
      }else{
        res.redirect('/');
      }
    });
});
module.exports = router;
