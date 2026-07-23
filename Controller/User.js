const User=require("../models/user");
const  bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
 async function signUp(req,res){
  const {name,username,email,password}=req.body;
 const hashedPassword= await bcrypt.hash(password,10); 
const data=await User.create({
  name,
  username,
  email,password:hashedPassword});
 res.status(201).json({message:"Done",data:data});
console.log(data)
console.log(req.body);
};
 async function login(req,res){
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
            expiresIn: "1m"
        }
    );
const refreshToken = jwt.sign(
    payload,
    process.env.REFRESH_SECRET,
    {
        expiresIn: "7d"
    }
);
  return res.status(200).json({
    message: "Login successful",
    accessToken,
    refreshToken
});
}
else{
 res.status(401).json({message:"unauthorized"});
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

        return res.status(200).json({
            message: "New access token generated",
            accessToken
        });

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired refresh token"
        });
    }
}

module.exports={
 signUp,login,refresh}
