const checkUsersValid = require("./ex5")

var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }]

var testAllValid = checkUsersValid(goodUsers)

test("All users (two) exist in good users", () => {
  expect(testAllValid([{ id: 2 }, { id: 1 }])).toBe(true)
})

test("2 users exist but 1 user does not exist in good users", () => {
  expect(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }])).toBe(false)
})

test("No users exist", () => {
  expect(testAllValid([{ id: 6 }, { id: 7 }, { id: 8 }])).toBe(false)
})

test("All users (one) exist", () => {
  expect(testAllValid([{ id: 3 }])).toBe(true)
})
