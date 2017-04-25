var mongoose = require('mongoose');

var url = "mongodb://localhost:27017/lemon";

mongoose.Promise = global.Promise;

mongoose.connect(url);

var db = mongoose.connection;

db.on('error',function(err){
  console.log("数据库链接出错!");
  console.log(err);
});

db.once('open',function(){
  console.log("mongoose is working");
});

module.exports = mongoose;
