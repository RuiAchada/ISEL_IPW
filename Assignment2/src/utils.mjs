import fs from "fs"

export function readFile(path) {
  let rawdata = fs.readFileSync(path)
  let obj = JSON.parse(rawdata)
  return obj
}

export function createFile(path, data) {
  fs.writeFile(path, JSON.stringify(data), err => {
    if (err) {
      console.error(err)
    }
    // file written successfully
  })
}
