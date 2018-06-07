const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const data = require('./instructors.json')

function findById(data, requestedId) {
  return data.find(entry => entry.id === +requestedId)
}

app.get("/", (request, response) => {
  response.json(data)
})

app.get("/:id", (request, response) => {
  var item = findById(data, request.params.id)
  if (!item) {
    response.status(404).json({
      error: {
        message: "Item not found"
      }
    })
  }
  response.json(item)
})

const port = process.env.PORT|| 3000
app.listen(port)