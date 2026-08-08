const  {ForbiddenError}=require("../utils/customErrorClass");
 function authorize(...roles){
 return  function (req,res,next){
try{
 const role=req.user.role;
 if (roles.includes(role)){
next(); 
 console.log("i am a authorizer and i succesully transer to the validator  auth->authorizor->");
 }
 else {
   throw new ForbiddenError("your not authorized "); 
} 
  }catch(error){
 next(error);
}
}
}
 module.exports=authorize;
