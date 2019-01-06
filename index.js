const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('first route')
    res.send('Hello World')
})

const PORT = 3000
const HOST = 'localhost'

app.listen(PORT, () => {
    console.log('server up in %s:%s', HOST, PORT);
})