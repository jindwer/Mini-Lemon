/* 提问　集合 */
var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;

var IssueSchema = new Schema({
    title:String,
    content:String,
    tags:{type:Array,default:[]},
    puber:{type:Array,default:[]},
    ctime:Number,
    ansuser:{type:Array,default:[]},
    ltime:Number,
    votes:{type:Number,default:0},
    answers:{type:Number,default:0},
    scans:{type:Number,default:0},
    focus:{type:Number,default:0},
    collects:{type:Number,default:0},
    issolve:{type:Boolean,default:false},
    reports:{type:Number,default:0},
    closes:{type:Number,default:0}
});

var Issue = mongoose.model('Issue',IssueSchema);

module.exports = Issue;
