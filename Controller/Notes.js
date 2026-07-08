 const Notes=require("../models/Notes");
  async function CreateNote(req,res){
   const {title,content}=req.body;
 if (title  || content){

  const newData= await Notes.create( {
  title,
 content});
  res.status(200).json({ mesaage:"succesFull",
    data:newData});
 } else{
  res.status(400).json({message:"Bad Request"});
}}
module.exports=CreateNote;
