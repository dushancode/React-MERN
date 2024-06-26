require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const {logger} = require('./middleware/logger.js')
const errorHandler = require('./middleware/errorHandler.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions.js')

const connectDB = require('./config/dbConn.js')
const mongoose = require('mongoose')
const {logEvents} = require('./middleware/logger.js')

const PORT = process.env.PORT||3500

const ur = 'mongodb+srv://dushan:1234@cluster0.hkhm3tj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


const connect = async () => {
    try{
        await mongoose.connect(ur);
        console.log("connect to mongodb")

    }
    catch(er){
                 console.log(er)
    }
}

//connect();

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

app.use('/',express.static(path.join(__dirname,'/public')))

app.use('/',require('./routes/root.js'))

app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){
        res.json({messege:'404 not found'})
    }else{
        res.type('txt').send('404 not found ')
    }

})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

