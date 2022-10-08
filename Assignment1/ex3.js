/*Add a validateProperties method to Object type. 
This method implementation should call the validateProperties function implemented in the previous exercise.

Example

   const validators = [
      {
      name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"] 
      },
      {
      name : "p2" , validators: [s => Number.isInteger(s)] 
      }
   ]
   const obj1 = { p1 : "a" }
   const obj2 = { p1 : 123  }
   const obj3 = { p1 : "abc" , p2 : 123 }

   obj1.validateProperties(validators) // ["p1", "p2"]
   obj2.validateProperties(validators) // ["p1", "p2"]
   obj3.validateProperties(validators) // []

*/
const validateProperties = require("./ex2")

Object.prototype.validateProperties = function (validators) {
  return validateProperties(this, validators)
}
