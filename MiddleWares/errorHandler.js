
 function unexpectedHandler(err,req,res,next){

 console.log("hello i am error handler");
console.error(err);
 return res.status(500).json({message:"Ingernal server error"}) ;
 

}
module.exports=unexpectedHandler;
