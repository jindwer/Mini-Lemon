/* 评论　集合　*/
var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    answerid:String,
    content:String,
    comuser:{type:Array,default:[]},
    ctime:Number
});

var Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;
