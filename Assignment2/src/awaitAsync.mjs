import fetch from "node-fetch"

function processResults(str) {
  console.log("Process results..")
  console.log(str)
}

function processError(str) {
  console.log("Process Error..")
}

export async function makeRequestAw(url) {
  try {
    let response = await fetch(url)
    let str = await response.text()
    return str
    //processResults(str)
  } catch (err) {
    processError(err)
  }
}
