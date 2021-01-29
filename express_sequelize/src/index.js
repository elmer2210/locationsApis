const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./query')
const port = 3030

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/donadores', db.getDonadores)
app.post('/donadores/create', db.postDonadores)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})