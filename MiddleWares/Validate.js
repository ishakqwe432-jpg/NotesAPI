function validator(schema){
return function(req,res,next){
try {
const expected=schema;
const  actual=req.body;
for (let ke in schema){
console.log(ke);
console.log(expected[ke]);
if ( actual[ke]===null || actual[ke]===undefined  ||  ( typeof actual[ke] ==="string"  && actual[ke].trim()===""))
  {
return res.status(400).json({message: `${ke} data is missing`});
   }

if ( expected[ke].name.toLowerCase()!== typeof actual[ke]){
return  res.status(400).json({message:` ${ke} Invalid Data type` })
   }


console.log(ke);
console.log(expected[ke]);
    }  

  next();
 console.log(" its stuccefully passed auth->authorizor-> validator-> ",expected); 
} catch(error){
  next(error);
}
}
}
module.exports=validator;
