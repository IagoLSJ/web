const mongoose = require('mongoose')



var mongoDB_URL = 'mongodb://localhost:27017/crud'

mongoose.connect(mongoDB_URL, { useNewUrlParser: true})

var db = mongoose.connection


db.on('connection', ()=>{
    console.log('Mongoose Connection to '+ mongoDB_URL);
})
db.on('desconnected', ()=>{
    console.log('Mongoose Desconnected to '+ mongoDB_URL);
})
db.on('error', (err)=>{
    console.log('Mongoose Error to '+ err);
})
