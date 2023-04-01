const http = require('http')
const dotenv = require('dotenv').config()
const app = require("./app")
const server = http.createServer(app)

server.listen(3000)