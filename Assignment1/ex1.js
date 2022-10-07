/* Implement the function validateProperty(obj, propValidator), 
returns true if it confirms the existence and validity of a given property in obj, or false otherwise. 
The validity specification is provided in propValidator argument.

Example

const validator = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]  }
const obj1 = { p1 : "abc" }
const obj2 = { p2 : 123 }
const obj3 = { p1 : "a" , p2 : 123 }

validateProperty(obj1, validator) //true
validateProperty(obj2, validator) //false
validateProperty(obj3, validator) //false
Arguments

obj: an object to validate a property
propValidator: an object that validates a property on obj, having the following properties:
name - the name of the property to validate
validators - an array of predicate functions that must be called with the property value. If any returns false the property is invalid.
Conditions

Do not create any unnecessary functions e.g. helpers.
*/

function validateProperty(obj, propValidator) {
  const propName = obj[propValidator.name]

  // return true if all functions in the predicate return true
  return propValidator.validators.every(f => f(propName))
}

module.exports = validateProperty
