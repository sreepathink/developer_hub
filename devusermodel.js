const mongoose = require('mongoose');

const devuser = new mongoose.Schema({

    fullname:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    mobile:{
        type: String,
        required:true,
    },
    skill:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    confirmpassword:{
        type:String,
        required: true,
    }
})

module.exports = mongoose.model('devuser', devuser)