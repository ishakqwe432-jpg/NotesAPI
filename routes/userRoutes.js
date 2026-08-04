const express=require("express");
const router=express.Router();
const {signUp,login,refresh,logOut}=require("../Controller/User");
const authenticator=require("../MiddleWares/auth"); 
router.post("/signUp",signUp);
 router.post("/login",login);
router.post("/refresh",refresh);
  router.get("/logOut",authenticator,logOut);
 module.exports=router;
