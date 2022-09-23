const { Messages } = require('./app')

const {Router} = require('express')
const appRoutes = Router()


appRoutes.get('/home', (req, res)=> {
    Messages.find()
    res.send(messages)
})

appRoutes.post('/chat', (req, res)=>{
    // res.send('succes')
    let message = new Messages(req.body)
    message.save()
    res.sendStatus(200).body(message)
})



module.exports = appRoutes