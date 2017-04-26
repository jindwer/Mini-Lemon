/* 用户　集合　*/
var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;

var TagSchema = new Schema({
    ptag:String,
    ctag:{type:Object,default:{}}
});

var Tag = mongoose.model('Tag',TagSchema);

module.exports = Tag;
