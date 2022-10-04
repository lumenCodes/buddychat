const express = require("express")
const app = express()

const mongoose = require('mongoose')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const appRoutes = require("./routes")
require ('dotenv').config()



// create an express app
app.use(express.json())
app.use('/api',appRoutes)

// db setup

const dbURI = process.env.DB
async function connect () { // afunction that will be called whenever the db wants to connect
    try {
        await  mongoose.connect(dbURI, () => console.log('connected to db'))
        
    } catch (error) {
        console.error('there is a problem', error)
    }}
connect()

// socket connection
io.on('connection', ()=> {
    console.log('Someone id connected on io')
})

// initialize server to listen on a port

port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`server is up and running on ${port}, we are on 🥱`)
})


