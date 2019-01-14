const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

const { Schema } = mongoose;
const { Currency } = mongoose.Types;

const commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  usePushEach: true,
});

const dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  price: {
    type: Currency,
    required: true,
    min: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
}, {
  timestamps: true,
  usePushEach: true,
});

const Dishes = mongoose.model('Dish', dishSchema);
module.exports = Dishes;
