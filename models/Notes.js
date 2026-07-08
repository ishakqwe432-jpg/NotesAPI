const mongoose=require("mongoose");
 const  NotesSchema=new mongoose.Schema({
    
    title :String,
    content: String,
   },{timestamps:true});

   const User= mongoose.model("Note",NotesSchema);
  module.exports=User;
