 const express=require("express");
  const router=express.Router();
const authenticator=require("../MiddleWares/auth.js");
const authorizer=require("../MiddleWares/authorize");
   const {CreateNote,GetNotes}=require("../Controller/Notes");
const isValid=require("../MiddleWares/isValid");
   const LoggerMid=require("../MiddleWares/Logger");
   router.post("/notes",authenticator,authorizer("user","admin"),LoggerMid,isValid,CreateNote);
 router.get("/me",authenticator,GetNotes) ;

 module.exports=router
