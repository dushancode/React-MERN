const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    // inside here has the data models 

    username: {    //users can be 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('User', userSchema)