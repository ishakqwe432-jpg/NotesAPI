function isValidator(req,res,next){
const  {title,content}=req.body;
 const errors=[]; 
if  ( typeof(title)!=="string" || title.trim()===""){
    errors.push("title datatype or string is empty");
  }
if( typeof(content)!=="string"  ||  content.trim()===""){
  errors.push("content is either missing or it has no string");
}
 if(title || content){
 errors.push("title or content is missing");
}
 if (errors.length==0){
   next();
}
 else{
   res.status(400).json({errors});
}}
 module.exports=isValidator;
