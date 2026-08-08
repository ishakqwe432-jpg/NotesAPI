class appError extends Error{
   constructor(message,statusCode){
    super(message);
   this.statusCode=statusCode
  this.name=this.constructor.name;
 }
  }
  class  UnauthorizedError extends  appError{
    constructor(message){
    super(message,401);
}
 }
 class ForbiddenError extends  appError{
 constructor(message){
 super(message,403);
}}
class ValidationError extends appError{
constructor(message){
super(message,400);
 }}

class ConflictError extends appError {
    constructor(message) {
        super(message,409);
    }}
 module.exports={
    appError,
UnauthorizedError,
ForbiddenError,
ValidationError,ConflictError}
