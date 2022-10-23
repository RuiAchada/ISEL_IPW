/* Part 2 - Node application
Foreword
This part requires that your code makes HTTP requests to the IMDb API. To access this API, each student must request the API key that identifies the student application's requests. That key must be included in the URL of each HTTP request. The description of the necessary steps to create the token are described here at the bottom. Note that this is a free API, and therefore it is expected that you comply with the Rate Limits and Good Citizenship rules.

Application requirements
This application reads movie ids from a json file, with the following format:

{
   "movie-ids" : [
       "tt0111161",
       "tt0068646",
       "tt0468569",
   ]
}
and produces another JSON file containing each movie id, title, duration, and the total duration of those movies, as shown in following example:

{
    "total-duration": 469,
    "movies": [
        {
            "id": "tt0111161",
            "title": "The Shawshank Redemption",
            "duration": 142
        },
        {
            "id": "tt0068646",
            "title": "The Godfather",
            "duration": 175
        },
        {
            "id": "tt0468569",
            "title": "Inception",
            "duration": 152
        }
    ]
}
Implement two versions of the application:

Using Promises explicitly
Using the async/await style
REMARK: The students should consider the limitations of this free API, namely the maximum number of requestas per day (100).
*/

import { readFile, createFile } from "./src/utils.mjs"
import { makeRequestAw } from "./src/awaitAsync.mjs"
import { makeRequestPr } from "./src/promises.mjs"
import fs from "fs"
const URL = "https://imdb-api.com/en/API/Title/k_om775mcl/"
const pathToSave = "./content/newJson.json"
const pathToRead = "content/movie-list.json"

async function start() {
  let movies = readFile(pathToRead)
  let newObj = []
  let promises = []
  movies["movie-ids"]?.map(it => {
    let url = `${URL}${it}`
    console.log(url)
    //promises.push(makeRequestAw(url))
    promises.push(makeRequestPr(url))
  })
  console.log(promises)
  let result = Promise.all(promises)
  result.then(data => jsonSuccess(data))
}

function jsonSuccess(data) {
  let obj = generateNewJson(data)
  createFile(pathToSave, obj)
}

export function generateNewJson(movies) {
  let totalDuration = 0
  let json = {}
  json["movies"] = []
  movies.map(it => {
    let movObj = JSON.parse(it)
    let movie = {}
    movie.id = movObj.id
    movie.title = movObj.title
    movie.duration = movObj.runtimeMins
    totalDuration += parseInt(movObj.runtimeMins)
    json["movies"].push(movie)
  })
  json["total-duration"] = totalDuration
  console.log(json)
  return json
}

start()
