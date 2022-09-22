
const mongoose = require("mongoose")

//DB setup
/**
 * i am going to be using MOngoDB hosted online but has an offline version
 */

const dbURI = 'mongodb+srv://admin:whizzie091@cluster0.ikivogo.mongodb.net/test'
mongoose.connect(dbURI, ()=> console.log('connected to db'))

const Messages = mongoose.model('Messages',{
    name: String,
    message: String,
    createdAt: Date
})

module.exports = {Messages}