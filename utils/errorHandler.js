
 function unexpectedHandler(err,req,res,next){

console.error(err);
   const statusCode=err.statusCode||500;
 const message= statusCode===500?"Internal Server Erorr ":err.message;
 return res.status(statusCode).json({message}) ;
 

}
module.exports=unexpectedHandler;
