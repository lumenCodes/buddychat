const express = require("express")
const mongoose = require('mongoose')
require ('dotenv').config()


// create an express app
const app = express()
app.use(express.json)

// db setup

const dbURI = process.env.DB
async function connect () {
    try {
        await  mongoose.connect(dbURI, () => console.log('connected to db'))
        
    } catch (error) {
        console.error('there is a problem', error)
    }}
connect()

// model for messages
const Messages = mongoose.model('Messages',{
    name: String,
    message: String,
    createdAt: Date
})



// initialize server to listen on a port

port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`server is up and running on ${port}, we are on 👍🏼👍`)
})




module.exports = {Messages}