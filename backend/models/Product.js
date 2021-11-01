const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prices: [
    {
      id: {
        type: Number,
        required: true,
      },
      days: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  additionalInfo: {
    type: String,
    required: true,
  },
  cpfc: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
