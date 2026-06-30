const express=require("express");
//const cors=require("cors");
const {getNotes,createNotes}=require("./src/NoteController");
const app=express();
//app.use(cors());
app.use(express.json());
app.post("/api/Create",createNotes);
app.get("/api/showData",getNotes)
app.listen(3004,(req,res)=>{
console.log("server has started running ");
});
