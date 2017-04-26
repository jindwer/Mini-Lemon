var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;

var InfoSchema = new Schema({
    prestige: Number,
    follow: Number,
    Collection: Number,
    Praise:Number,
    address:String,
    School:String,
    company:String,
    Website:String,
    jianjie:String,
    skill:String,
    project:String
});

var Info = mongoose.model('Info',InfoSchema);

module.exports = Info;
