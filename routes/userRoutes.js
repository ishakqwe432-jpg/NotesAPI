const express=require("express");
const router=express.Router();
const {signUp,login,refresh}=require("../Controller/User");
 router.post("/signUp",signUp);
 router.post("/login",login);
router.post("/refresh",refresh);
 module.exports=router;
