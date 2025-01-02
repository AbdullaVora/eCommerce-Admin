const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    brand: String,
    code: Number,
    category: String,
    color: String,
    size: Number,
    description: String,
    price: Number,
    quantity: Number,
    image: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const productModel = mongoose.model('Products', productSchema);
module.exports = productModel;