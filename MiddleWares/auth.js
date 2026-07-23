  const jwt=require("jsonwebtoken");
 
function authenticator(req,res,next){
  if (!req.headers.authorization){
 return res.status(401).json({message:"unauthorised"});
} 
 const token=req.headers.authorization.split(" ")[1];
 try{
  const decoded= jwt.verify(token,process.env.JWT_SECRET);
 
   req.user=decoded;
   next();
}
 catch(error){
  console.log(error.message);
return res.status(401).json({message:"unauthorized"});
  }
  }
  module.exports=authenticator; 
  
