/*
Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

Create a Spy function that returns an object that keeps track of how many times a function is called.

Example

var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3
Arguments

target: an object containing the method method
method: a string with the name of the method on target to spy on.
Conditions

Do not use any for/while loops or Array#forEach.
Do not create any unnecessary functions e.g. helpers.
Hint

Functions have context, input and output. Make sure you consider the context, input to and output from the function you are spying on.
*/

function Spy(target, method) {
  const originalFun = target[method]
  const spyObj = { count: 0 }
  target[method] = arg => {
    originalFun(arg)
    spyObj.count++
  }
  return spyObj
}

module.exports = Spy
