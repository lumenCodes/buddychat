
const mongoose = require('mongoose')
const {Schema} = require('mongoose')


const messageSchema = new Schema({
    name: String,
    message: String,
    createdAt: {
        type: Date, default: Date.now()
    }
})

const Messages = mongoose.model('Messages', messageSchema) 



module.exports = Messages