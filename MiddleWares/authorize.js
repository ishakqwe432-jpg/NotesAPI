 function authorize(...roles){
 return  function (req,res,next){
 const role=req.user.role;
 if (roles.includes(role)){
  res.status(201).json({message:"sucessFUll"});
next(); 
}
 else {
  res.status(401).json({message:"forbidden in short this of limits to your access"});
} 
 }
}
 module.exports=authorize;
