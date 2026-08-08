const {ValidationError}=require("../utils/customErrorClass");
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
throw new ValidationError(`${ke} data is missing`);
   }

if ( expected[ke].name.toLowerCase()!== typeof actual[ke]){
  throw new ValidationError(` ${ke} Invalid Data type` )
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
