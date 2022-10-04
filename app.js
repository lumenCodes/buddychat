const app = require('express')
const ejs = require('ejs')



// ststic files

app.use(express.static('public'))
app.use('/css', express.static(__dirname  +'public/css'))
app.use('/js', express.static(__dirname  +'public/js'))
app.use('/img', express.static(__dirname  +'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')



//socket.io
