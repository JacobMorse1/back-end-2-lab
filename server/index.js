const express = require('express')
const cors = require('cors')
const SERVER_PORT = 4004


const app = express()

app.use(express.json())
app.use(cors())

const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);



app.listen(SERVER_PORT, () => {
    console.log(`Running on port ${SERVER_PORT}`)
})