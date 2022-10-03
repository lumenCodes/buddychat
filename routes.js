const Messages  = require('./model')

const {Router} = require('express')
const appRoutes = Router()

appRoutes.get('',(req, res) => {
    res.render('homepage.ejs')
})
appRoutes.get('/about',(req, res) => {
    res.render('aboutpage.ejs')
})

appRoutes.get('/home', async (req, res)=> {
    const messages = await  Messages.find()
    res.send(messages)
})

appRoutes.post('/chat', (req, res)=>{
    // res.send('succes')
    let message = new Messages(req.body)
    message.save()
    res.send(message)
})



module.exports = appRoutes