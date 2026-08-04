 function authorize(...roles){
 return  function (req,res,next){
try{
 const role=req.user.role;
 if (roles.includes(role)){
next(); 
 console.log("i am a authorizer and i succesully transer to the validator  auth->authorizor->");
 }
 else {
  res.status(403).json({message:"forbidden in short this of limits to your access"});
} 
  }catch(error){
 next(error);
}
}
}
 module.exports=authorize;
