const validateProperty = require("./ex1")

const validator = { name: "p1", validators: [s => typeof s == "string" && s.length > 2, s => s[0] == "a"] }
const obj1 = { p1: "abc" }
const obj2 = { p2: 123 }
const obj3 = { p1: "a", p2: 123 }

test("'abc' is string, length > 2 and first char is 'a', return true", () => {
  expect(validateProperty(obj1, validator)).toBe(true)
})

test("p1 prop does not exist, return false", () => {
  expect(validateProperty(obj2, validator)).toBe(false)
})

test("'a' has length <= 2, return false", () => {
  expect(validateProperty(obj3, validator)).toBe(false)
})
