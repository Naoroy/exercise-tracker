const express = require('express')
const app     = express()
const PORT    = 3030

app.use(express.json())

app.get('/', function(req, res) { res.send({ msg: 'Hello there' }) })

app.listen(PORT, console.log('listening on ' + PORT))
