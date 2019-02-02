const express = require('express')

const app = express()

var userRouter = require('./userRoutes')

var bodyParser = require('body-parser')

app.use(bodyParser.json())

//middeware
app.use((req, res, next) => {
    next()
})

app.use('/user', userRouter)

app.get('/', (req, res) => {
    console.log('first route')
    res.send('Hello World')
})

//retorna os dados em JSON
app.get('/json/resp', (req, res) => {
    var obj = {
        date: Date.now(),
        response: "Chamada realizada"
    }
    res.send(obj)
})

//API enviando parametro
app.get('/user/:userId', (req, res) => {
    var obj = {
        idRecebido: req.params.userId
    }
    res.send(obj)
})

//Utilizado para criação de objetos
app.post('/incluir', (req, res) => {
    var obj = {
        nome: req.body.nome
    }
    res.send(obj)
})

//Tratamento de erros
var handleErros = (err, req, res, next) => {
    res.status(500).json({ resposta: 'Erro na requisição' })
}

app.use(handleErros)


const PORT = 3000
const HOST = 'localhost'
app.listen(PORT, () => {
    console.log('server up in %s:%s', HOST, PORT);
})