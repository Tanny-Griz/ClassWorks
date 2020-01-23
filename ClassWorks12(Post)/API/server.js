const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors(corsOptions))

var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

const usersArr = [{
    name: 'Vasya',
},
{
    name: 'Petya',
},
]

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/users', (req, res) => {
    res.json(usersArr)
})

app.post('/users', (req, res) => {
    usersArr.push(req.body)
    res.send('Eser has been created')
})

app.listen(PORT, () => {
    console.log('Server listeniong on 3000')
})