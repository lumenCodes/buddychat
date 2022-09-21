const express = require("express")


// create an express app
const app = express()
app.use(express.json)

// initialize server to listen on a port

port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`server is up and running on ${port}, we are on 👍🏼👍`)
})
