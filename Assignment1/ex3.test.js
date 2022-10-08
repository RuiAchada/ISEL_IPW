const validateProperties = require("./ex2")
require("./ex3")

const validators = [
  {
    name: "p1",
    validators: [s => typeof s == "string" && s.length > 2, s => s[0] == "a"]
  },
  {
    name: "p2",
    validators: [s => Number.isInteger(s)]
  }
]
const obj1 = { p1: "a" }
const obj2 = { p1: 123 }
const obj3 = { p1: "abc", p2: 123 }

test("p1 fails because length <= 2 and p2 does not exist", () => {
  expect(obj1.validateProperties(validators)).toEqual(["p1", "p2"])
})

test("p1 fails because it's not string and p2 does not exist", () => {
  expect(obj2.validateProperties(validators)).toEqual(["p1", "p2"])
})

test("p1 and p2 pass the validation", () => {
  expect(obj3.validateProperties(validators)).toEqual([])
})
