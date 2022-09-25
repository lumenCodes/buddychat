const express = require("express")
const mongoose = require('mongoose')
const appRoutes = require("./routes")
require ('dotenv').config()


// create an express app
const app = express()
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



// initialize server to listen on a port

port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`server is up and running on ${port}, we are on 🥱`)
})


