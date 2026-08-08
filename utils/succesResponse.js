 function succesResponse(res,statusCode,message,data=null){
  return  res.status(statusCode).json({
   sucess:true,
   message,
   ...(data!==null &&  {data}) })
 }
  module.exports=succesResponse;
