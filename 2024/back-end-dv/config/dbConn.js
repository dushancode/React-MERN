const mongoose = require('mongoose')

const ur = 'mongodb+srv://dushan:1234@cluster0.hkhm3tj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// const connectDB = async () => {
//     try {
//         await mongoose.connect(ur)
//     } catch (err) {
//         console.log(err)
//     }
// }


const connectDB = async () => {
    try{
        await mongoose.connect(ur);
        console.log("connect to mongodb")

    }
    catch(er){
                 console.log(er)
    }
}

module.exports = connectDB