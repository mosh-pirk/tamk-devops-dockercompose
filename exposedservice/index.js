const express = require('express')
const axios = require('axios');
const cors = require('cors');
const app = express()
app.use(cors());
const port = 4000

const internalName = 'http://internalserver:4002'

app.get('/', async (req, res) => {
    const remote = req.socket.remoteAddress + ':' + req.socket.remotePort
    const local = req.socket.localAddress + ':' + req.socket.localPort
    const message = `Hello from ${remote} \n to ${local}`
    const data = await axios.get(internalName)
        .catch(err => console.log('Something goes wrong', err.message))
    res.send(message + '\n' + data.data)
})

app.listen(port, () => {
    console.log('Listing to ' + port)
})