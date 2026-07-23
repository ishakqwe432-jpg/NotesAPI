 const express=require("express");
  const router=express.Router();
const authenticator=require("../MiddleWares/auth.js");
   const {CreateNote,GetNotes}=require("../Controller/Notes");
const isValid=require("../MiddleWares/isValid");
   const LoggerMid=require("../MiddleWares/Logger");
   router.post("/notes",authenticator,LoggerMid,isValid,CreateNote);
 router.get("/me",authenticator,GetNotes) ;

 module.exports=router
