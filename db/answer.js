/* 回答　集合 */
var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    issuesid:String,
    content:String,
    ctime:Number,
    ansuser:Array,
    comments:{type:Number,default:0},
    likes:{type:Number,default:0},
    unlikes:{type:Number,default:0},
    isaccept:{type:Boolean,default:false}
});

var Answer = mongoose.model('Answer',AnswerSchema);

module.exports = Answer;
