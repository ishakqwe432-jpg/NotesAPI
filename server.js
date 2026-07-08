const express=require("express");
const connectDB=require("./config/db");
//  Router imports only 
   const CreateNotes=require("./routes/NoteRoutes");
// Middleware Imports
const isValid=require("./MiddleWares/isValid");
   const LoggerMid=require("./MiddleWares/Logger");
const app=express();
app.use(express.json());
 // endpoint of APIs

  app.use("/api",LoggerMid,isValid,CreateNotes);
connectDB();
 console.log(3004);
app.listen(3004,()=>{
console.log("server has started running ");
});
