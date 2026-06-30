const fs=require("fs");
function notes(){
const data=fs.readFileSync("./data.json","utf-8");
return JSON.parse(data);
}
const note=notes();

function getNotes(req,res){
  const data=fs.readFileSync("data.json","utf-8");
res.status(201).send(JSON.parse(data));
}

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
console.log(err.message)}});
res.status(201).send(saveData);
}

module.exports={getNotes,
    createNotes};
