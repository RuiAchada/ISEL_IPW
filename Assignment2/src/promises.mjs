import fetch from "node-fetch"

function processResults(str) {
  console.log("Process results..")
}

function processError(str) {
  console.log("Process Error..")
}

export function makeRequestPr(url) {
  return fetch(url)
    .then(response => response.text())
    .catch(processError)
}
