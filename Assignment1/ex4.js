/*
Add the associateWith(transformation) method to the Array type. 
This function returns an Object in which the elements values of the original Array are properties names, 
and the corresponding values values are produced from them by the given transformation function.
If two elements are equal, only the last one remains in the object. Example:

let numbers = ["one", "two", "three", "four"]
console.log(numbers.associateWith( str => str.length ))

// { one: 3, two: 3, three: 5, four: 4}

*/

Array.prototype.associateWith = function (transformation) {
  const newObj = {}
  this.map(it => (newObj[it] = transformation(it)))
  return newObj
}
