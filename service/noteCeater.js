const Reader=require("./noteReader");
const note=Reader();
function createNotes(req,res){
const  saveData={
id:note.length+1,
title:req.body.title,
content: req.body.content
}
console.log(saveData);
note.push(saveData);
  fs.writeFile ("data.json",JSON.stringify(note,null,2),"utf-8",(err)=>{
if (err){
console.log(err.message)}else return "done"; }});
}
  module.eports=createNotes;
