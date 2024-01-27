var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var Cars=new Schema({
    name:{type:String},
    brand:{type:String},
    price:{type:String},
},{
    timestamps:true
});
module.exports=mongoose.model('Car',Cars);