const mongoose=require("mongoose");
 const UserSchema= new mongoose.Schema({
name:{
 type:String,
  required:true,
  trim:true,
  maxlength:50},
 
  username:{
  type :String,
 required:true,
trim :true,
  maxlength:50,
   unique:true,
   index:true},

 email:{
  type :String,
 required:true,
trim :true,
  maxlength:50,
  unique:true,
index:true},

  password:{
 type:String,
  required:true,
maxlength:70,
 minlength:9}, 
   
role :{  
   type:String,
   enum:["user","admin"],
 default:"user"
   },
 isActive:{
  type:Boolean,
  default:true
}
},{timestamps:true})
  module.exports=  mongoose.model("User",
UserSchema);
