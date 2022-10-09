const Spy = require("./ex6")

test("calling 3 console errors", () => {
  var spy = Spy(console, "error")

  console.error("calling console.error")
  console.error("calling console.error")
  console.error("calling console.error")

  console.log(spy.count) // 3

  expect(spy.count).toBe(3)
})

test("calling 1 console log", () => {
  var spy = Spy(console, "log")

  console.log(spy.count)

  expect(spy.count).toBe(1)
})

test("calling 2", () => {
  var spy = Spy(process, "cwd")

  console.log(process.cwd())
  const dir = process.cwd()

  expect(spy.count).toBe(2)
})

test("calling 0", () => {
  var spy = Spy(process, "cwd")
  expect(spy.count).toBe(0)
})
