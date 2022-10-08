/*
Implement checkUsersValid(goodUsers) function 
return a function that takes a list of valid users in goodUsers, 
and returns true if all of the supplied users exist in the original list of users, or false otherwise.

You only need to check that the user ids match. Example:

var goodUsers = [
   { id: 1 },
   { id: 2 },
   { id: 3 }
]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

testAllValid([
   { id: 2 },
   { id: 1 }
])
// => true

testAllValid([
   { id: 2 },
   { id: 4 },
   { id: 1 }
])
// => false
Arguments

goodUsers: a list of valid users
*/

// Objects are reference types so we can’t just use === or == to compare 2 objects (users).
function checkUsersValid(goodUsers) {
  return usersToValidate => {
    return usersToValidate.every(u => {
      // all usersToValidate must pass a condition (all users must exist in goodUsers)
      return goodUsers.some(it => it.id == u.id) // returns true if user exists in goodUsers
    })
  }
}

// solution 2. Convert the ID's to an array and check if all elements in the usersToValidate exist in goodUsers
/*
function checkUsersValid(goodUsers) {
  const arr1 = goodUsers.map(it => it.id)
  return usersToValidate => {
    const arr2 = usersToValidate.map(it => it.id)
    return arr2.every(v => arr1.includes(v))
  }
}
*/

module.exports = checkUsersValid
