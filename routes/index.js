var express = require('express');
var router = express.Router();
var User = require('../db/user.js');
var Tag  = require('../db/tag.js');
var Issue= require('../db/issue.js');
var Answer= require('../db/answer.js');
var ObjectId = require('mongoose').Types.ObjectId;

var limit= 20;

/* GET home page. */
router.get('/',function(req,res,next){
  Issue.find({},null,{$sort:{'ltime':-1}},function(err,r){
    r = r==null?[]:r;
    res.render('index',{page:'index',issues:r});
  });
});

/* 登录/注册　页面 */
router.get('/login',function(req,res,next){
  res.render('login');
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

/* 展示tags标签地图　*/
router.get('/tags',function(req,res,next){
  Tag.find({},function(err,r){
    r = r==null?[]:r;
    res.render('tags',{tags:r});
  });
});

/* tag专题页面页面　*/
router.get(/^\/t\/([^\/]+)$/,function(req,res,next){
  var tag  = req.params[0];
  var type = req.query.type;
  var page = req.query.page;
  type = typeof type == 'undefined'?'newest':type;
  page = (typeof page == 'undefined'||page<1||isNaN(page))?1:page;
  var skip = (page-1)*limit;
  Issue.where('tags').in([tag]).count(function(err,count){
    if(err){
      console.log('计算个数错误');//-------------------------
    }else{
      if(type=='newest'){
        Issue.where('tags').in([tag]).sort({'ctime':-1}).skip(skip).limit(limit).exec(function(err,r){
          if(!err){
            r = r==null?[]:r;
            res.render('topic',{title:type+"-问题-",limit:limit,count:count,issues:r});
          }else{
            console.log(err);
            res.render('error');
          }
        });
      }else if(type=='blogs'){//文章---------------------

      }else if(type=='info'){//标签介绍----------------------

      }else{
        res.render('error');
      }
    }
  });
});

/* 关注标签ajax */
router.post('/focusTag',function(req,res,next){
  var user = req.session.user;
  if(!user){
    res.end(JSON.stringify({login:false}));
  }else{
    var ctag = req.body.tag;
    var ptag_id = req.body.ptag_id;
    User.findByIdAndUpdate(new ObjectId(user._id),{$push:{tagfocuslist:ctag}},function(err,r){
      if(err){
        res.end(JSON.stringify({login:true,status:false}));
      }else{
        var ctag_obj = 'ctag.'+ctag+'.focus';
        Tag.findByIdAndUpdate(new ObjectId(ptag_id),{$inc:{ctag_obj:1}},function(err,r){
          res.end(JSON.stringify({login:true,status:true}));
        });
      }
    });
  }
});

/* 标签的详细 info */
router.get(/^\/t\/([^\/]+)\/info$/,function(req,res,next){
      var tag = req.params[0];
      var field = 'ctag.'+tag;
      Tag.findOne({field:{$exists:true}},function(err,r){
        if(err||r==null){
          res.render('error');
        }else{
          res.render('taginfo',{info:r});
        }
      });
});

/* 问题的相关路由 /q */
router.get(/^\/q\/([0-9|a-z]{24})/,function(req,res,next){
  var id = req.params[0];
  var data = {};
  Issue.findOneAndUpdate({'_id':new ObjectId(id)},{$inc:{scans:1}},function(err,q){
    if(!err){
      data.issue = q;
      Answer.find({'issuesid':id},function(err,ans){
        if(err||ans==null){
          ans = [];
        }
        data.answer = ans;
        res.render('detail',data);
      });
    }else{
      res.render('error');
    }
  });
});

/* 主页问答 /questions */
router.get(/^\/questions(\/\w+)?$/,function(req,res,next){
    var page = req.query.page;
    page = (page=='undefined'||page<1||isNaN(page))?1:page;
    var skip = (page-1)*limit;
    var type = req.params[0];
    if(typeof type == 'undefined'){
      Issue.count(function(err,n){
        Issue.where({}).sort({'ltime':-1}).skip(skip).limit(limit).exec(function(err,r){
          r = r==null?[]:r;
          res.render('index',{page:"questions",count:n,current:page,issues:r});
        });
      });
    }else if(type=='/hottest'){
      var time = parseInt(new Date().getTime()/1000)-86400;
      Issue.where('ltime').gt(time).count(function(err,n){
        Issue.where('ltime').gt(time).sort({'ltime':-1}).skip(skip).limit(limit).exec(function(err,r){
          r = r==null?[]:r;
          res.render('index',{page:"hottest",count:n,current:page,issues:r});
        });
      });
    }else if(type=='/unanswer'){
      Issue.where({'answers':0}).count(function(err,n){
        Issue.where({'answers':0}).sort({'ltime':-1}).skip(skip).limit(limit).exec(function(err,r){
          r = r==null?[]:r;
          res.render('index',{page:"unanswer",count:n,current:page,issues:r});
        });
      });
    }else{
      res.render('error');
    }
});

module.exports = router;
