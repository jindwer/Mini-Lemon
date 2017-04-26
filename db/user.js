/* 用户　集合　*/
var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    uid:String,
    nick:String,
    password:String,
    likes:{type:String,default:0},
    focus:{type:String,default:0},
    actives:{type:Number,default:1},
    focuslist:{type:Array,default:[]},
    tagfocuslist:{type:Array,default:[]},
    bads:{type:Number,default:0},
    issuesf:{type:Array,default:[]},
    issuesc:{type:Array,default:[]},
    issuesr:{type:Array,default:[]},
    infotimes:{type:Number,default:0},
    infodes:{type:String,default:""},
    badge:{type:Array,default:[]},
    info:{type:Object,default:{
      sex:1,
      org:""
    }},
    bbs:{type:Object,default:{}},
    ctime:Number,
    ltime:Number,
    isactive:{type:Boolean,default:true}
});

var User = mongoose.model('User',UserSchema);

module.exports = User;
