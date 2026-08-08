 const express=require("express");
  const router=express.Router();
const authenticator=require("../MiddleWares/auth.js");
const authorizer=require("../MiddleWares/authorize");
const unexpectedHandler=require("../utils/errorHandler")
  const validator=require("../MiddleWares/Validate");
  const Logger=require("../MiddleWares/Logger"); 
    //Controllere
 const {CreateNote,GetNotes}=require("../Controller/Notes");
// schemas
 const Notes=require("../models/Notes.js");
    // Wrappers
  const asyncHandler=require("../utils/asyncHandler");

   router.post("/notes",authenticator,authorizer("user","admin"),validator(Notes.schema.obj),Logger,asyncHandler(CreateNote),unexpectedHandler);
 router.get("/me",authenticator,authorizer("user","admin"),Logger,GetNotes,unexpectedHandler) ;

 module.exports=router
