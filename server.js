const express=require("express");
const connectDB=require("./config/db");
//  Router imports only 

   const CreateNotes=require("./routes/NoteRoutes"); 
  const auth=require("./routes/userRoutes.js");
console.log(CreateNotes);
// Middleware Imports

const app=express();
app.use(express.json());
 // endpoint of APIs
  app.use("/api",(req,res,next)=>{console.log("create note chain"); next()},CreateNotes);
app.use("/api",CreateNotes);
app.use("/api",(req,res,next)=>{console.log("chain of auth"); next()},auth);
app.use("/api",auth);
connectDB();
 console.log(3004);
app.listen(3004,()=>{
console.log("server has started running ");
});
