const express = require('express')
const server = express();
const bodyparser = require('body-parser')
const cors = require('cors')
const PORT = 4000

server.use(bodyparser.json())
server.use(cors())

server.post("/show",((req,res)=>{
   console.log(req.body)
}))

server.listen(4000)