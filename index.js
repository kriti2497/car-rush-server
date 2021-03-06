const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log('Server has started...')
})

app.use(express.static(path.join(__dirname, 'public')));