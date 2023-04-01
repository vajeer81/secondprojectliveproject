const express = require('express')
const app = express()
const studentrouter = require('./routs/studentrout')
const facltyrouter = require('./routs/feclty')
const mongoose = require('mongoose')
app.use(express.json())
mongoose.connect("mongodb+srv://vajeermohammad81:vajeerkhan123@cluster0.uoobtbm.mongodb.net/test")
// mongoose.connect('mongodb+srv://vk:vajeerkhan@cluster0.ibpgv3a.mongodb.net/test')
mongoose.connection.on('error', err => {
    console.log('================>database failed ') 
})
mongoose.connection.on('connected', connected => { 
    console.log('=====================>database connected')
})


// app.use(bodyparser.json())

app.use('/student', studentrouter)
app.use('/faclty', facltyrouter)




app.use('/', (req, res) => {
    res.status(404).json({
        message: 'sorry plz enter valid'
    })
})

module.exports = app


//QrOoZGpHoZw0t410