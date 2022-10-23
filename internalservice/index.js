const express = require('express')
const app = express()
const port = 4002

app.get('/', (req, res) => {
    const remote = req.socket.remoteAddress + ':' + req.socket.remotePort
    const local = req.socket.localAddress + ':' + req.socket.localPort
    res.send(`Hello from ${remote} \n to ${local}`)
})

app.listen(port, () => {
    console.log('Listing to ' + port)
})