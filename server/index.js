const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/articles', require('./routes/route'))

app.get('/', (req, res) => {
    res.send('Greatest articles ink world!!!')
})

app.listen(1000, console.log('up and run on port 1000'))