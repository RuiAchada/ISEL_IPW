import fetch from "node-fetch"
import fs from "fs"

start()

function start() {
  let rawdata = fs.readFileSync("movie-list.json")
  let movies = JSON.parse(rawdata)
  let newObj = []
  movies["movie-ids"]?.map(async function (it) {
    let rsp = await fetchMovie(it)
    console.log(rsp)
    newObj.push(rsp)
  })
  console.log(newObj)
}

/*
{
  "movie-ids": ["tt0111161", "tt0068646", "tt0468569"]
}
*/

async function fetchMovie(movie) {
  /* FETCH EXAMPLE
fetch("https://imdb-api.com/en/API/Title/k_om775mcl/tt1832382", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error))
*/
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  }

  return fetch(`https://imdb-api.com/en/API/Title/k_om775mcl/${movie}`, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log("error", error))
}

function generateNewJson(obj) {}
