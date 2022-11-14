const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "title is required"],
        enum: ["Mr", "Mrs", "Miss"]
    },
    firstName: {
        type: String,
        required: [true, "first name is requried"],
        trim:true
    },
    lastName: {
        type: String,
        required:[ true,"lastname is requried"],
        trim:true
    },
    email: {
        type: String,
        required: [true,"email required"],
        unique: true,
        trim:true

    },
    password: {
        type: String,
        required: true,
        trim:true
    }
}, { timestamps: true })



module.exports = mongoose.model('Author', authorSchema)