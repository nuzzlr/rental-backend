const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// Define the Person schema
const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    },
    work:{
        type: String,
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        required: true,
        type: String
    }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;