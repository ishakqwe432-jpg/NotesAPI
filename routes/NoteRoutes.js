 const express=require("express");
  const router=express.Router();
   const CreateNotes=require("../Controller/Notes");
   router.post("/notes",CreateNotes);
 module.exports=router
