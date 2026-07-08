 function Logger(req,res,next){
 let startTime= Date.now(); 
console.log(req.method,req.originalUrl);
let secret="s123";
  
if ( secret ===req.headers.api_key){
res.on("finish",()=>{  console.log( req.method," ",req.originalUrl," - ",res.statusCode," - ",Date.now()-startTime," ms")});
  next();
 } 
  else{
res.on("finish",()=>{  console.log( req.method," ",req.originalUrl," - ",res.statusCode," - ",Date.now()-startTime," ms")});
   res.status(400).json({message:"anauthorized"});
}}
 module.exports=Logger;

