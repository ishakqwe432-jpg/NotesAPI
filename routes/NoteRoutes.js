 const express=require("express");
  const router=express.Router();
const authenticator=require("../MiddleWares/auth.js");
const authorizer=require("../MiddleWares/authorize");
const unexpectedHandler=require("../MiddleWares/errorHandler")
   const {CreateNote,GetNotes}=require("../Controller/Notes");
// schemas
 const Notes=require("../models/Notes.js");
  const validator=require("../MiddleWares/Validate");

   const Logger=require("../MiddleWares/Logger");
   router.post("/notes",authenticator,authorizer("user","admin"),validator(Notes.schema.obj),Logger,CreateNote,unexpectedHandler);
 router.get("/me",authenticator,authorizer("user","admin"),Logger,GetNotes,unexpectedHandler) ;

 module.exports=router
