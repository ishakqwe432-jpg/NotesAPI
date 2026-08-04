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
 console.log("hey i ran successfully i am a first li,ne of defence auth->");
}

 catch(error){
return res.status(401).json({message:"token is expired  please login"});
  }
  }
  module.exports=authenticator; 
  
