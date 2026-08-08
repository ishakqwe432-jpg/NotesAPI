const User=require("../models/user");
const  bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
 const {ConflictError}=require("../utils/customErrorClass");
 const succesResponse=require("../utils/succesResponse");
 async function signUp(req,res,next){
  const {name,username,email,password}=req.body;
// added saftey check  to avoid duplicate insertions
  const existingUser= await  User.findOne({ $or:[{username},{email}]});
if ( existingUser){
  throw new ConflictError("User allready exist");
  }
 const hashedPassword= await bcrypt.hash(password,10); 
const data=await User.create({
  name,
  username,
  email,password:hashedPassword});
  return succesResponse(res,201,"succsefully registerd",data);
console.log(data)
console.log(req.body);

};
 async function login(req,res,next){
try{
  const {username,password}=req.body;
  const user=await User.findOne({username});
console.log(user);
if(!user){return  res.status(401).json({message:"user doesnt exist"});}
const isMatch=await  bcrypt.compare(password,user.password); 
 if(isMatch){
const payload = {
        userId: user._id,
        username: user.username,
        role: user.role
    };

    const accessToken = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: "15m"
        }
    );
const refreshToken = jwt.sign(
    payload,
    process.env.REFRESH_SECRET,
    {
        expiresIn: "7d"
    }
);
 user.refreshToken=refreshToken;
  await user.save();

  return res.status(200).json({
    message: "Login successful",
    accessToken,
    refreshToken
});
}
else{
 res.status(401).json({message:"unauthorized"});
}

   }catch(error){
   next(error);
 }
}
async function refresh(req, res) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({
            message: "Refresh token required"
        });
    }

    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_SECRET
        );
const user=await User.findById(decoded.userId);
if (!user) {
    return res.status(401).json({
        message: "User not found"
    });
}

if (user.refreshToken!==refreshToken){
return res.status(401).json({message:"Invalide refresh Token"});
}

        const accessToken = jwt.sign(
            {
                userId: decoded.userId,
                username: decoded.username,
                role: decoded.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "15m"
            }
        );
const payload = {
    userId: user._id,
    username: user.username,
    role: user.role
};
const newRefreshToken=jwt.sign(
 payload,
 process.env.REFRESH_SECRET,{ expiresIn:"7d"});
user.refreshToken=newRefreshToken;
await user.save();

        return res.status(200).json({
            message: "New access token generated",
            accessToken,
refreshToken:newRefreshToken
        });

    } catch (error) {
console.log(error.message);
        return res.status(401).json({
            message: "Invalid or expired refresh token"
        });
    }
}
 async function logOut(req,res,next){
try{
 const id=req.user.userId

const user= await User.findById(id);
if (!user){
 return res.status(404).json({message:"user not Found"});
}
  user.refreshToken=null
 await user.save()
   return res.status(200).json({message:"sucessfully Log Out"});
  } catch(error){
   next(error);

  }
}
module.exports={
 signUp,login,refresh,logOut}
