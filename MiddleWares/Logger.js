 function Logger(req,res,next){
 let startTime= Date.now(); 
console.log(req.method,req.originalUrl);
  
res.on("finish",()=>{  console.log( req.method," ",req.originalUrl," - ",res.statusCode," - ",Date.now()-startTime," ms")});
  next();
 console.log("i ran succesfully  auth ->authorizor->validator->logger->isValid");
}
 module.exports=Logger;

