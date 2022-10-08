require("./ex4")

let numbers = ["one", "two", "three", "four"]

test("array value is the prop and the prop value is the string length", () => {
  expect(numbers.associateWith(str => str.length)).toEqual({ one: 3, two: 3, three: 5, four: 4 })
})
