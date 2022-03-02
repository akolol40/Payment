const moogoose = require('mongoose')
const { Schema } = moogoose
const usersDB = require('../mongo/usDb')

const Payment = new Schema({
    cardNumber: {
        type: Number, 
        required: true,
        maxlength: 16
    }, 
    expDate: {
        type: Date,
    },
    cvv: {
        type: Number,
        maxlength: 3,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
},{versionKey: false})


module.exports = usersDB.model('Payment', Payment)