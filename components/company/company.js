const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: String,
    status: String
});

 module.exports = mongoose.model('company', companySchema,'company');