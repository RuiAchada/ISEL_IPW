/*
Implement the function validateProperties(obj, propValidators) 
returns an array with the name of the properties whose validation failed.
If an empty array is returned, the validation was successful.

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

validateProperties(obj1, validators) // ["p1", "p2"]
validateProperties(obj2, validators) // ["p1", "p2"]
validateProperties(obj3, validators) // []
Arguments

obj: an object to validate the properties

propValidators: an array of property validators, as defined in the previous exercise to validate the properties in obj

Conditions

Do not use any for/while loops or Array#forEach.
Do not create any unnecessary functions e.g. helpers.
Hints

The function must call validateProperty for each validator
*/

const validateProperty = require("./ex1")

function validateProperties(obj, propValidators) {
  return propValidators.map(it => {
    // returns a new array with the properties that failed validation
    if (!validateProperty(obj, it)) return it.name
  })
}

module.exports = validateProperties
