const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.SALES, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connect'))
    .catch((err) => console.log(err));

module.exports = mongoose