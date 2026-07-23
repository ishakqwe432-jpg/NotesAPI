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
  async function GetNotes(req,res){
   const data=await Notes.find();

 return res.status(200).json({message:"succesfull",data:data});

}
module.exports={CreateNote,GetNotes};
