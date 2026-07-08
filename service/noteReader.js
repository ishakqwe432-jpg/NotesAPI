  const fs=require("fs");
 function Reaader(){
  const data=fs.readFile(".src/data.json","utf-8",(err)=>{if(err)=>{console.log(err.message);
return ;}else{ console.log("Done");}});
return JSON.parse(data)
  }

module.exports=Reader;
