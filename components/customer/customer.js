const mongoose = require('mongoose');
const Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

const customerSchema = new Schema({
    name: String,
    product_id: { type: ObjectId, default: null },
    city: String
});


module.exports = mongoose.model('customer', customerSchema,'customer');