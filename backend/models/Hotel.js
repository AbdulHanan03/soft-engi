import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerPerson: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  ratings: {
    type: [Number],
    default: [],
  },
}, {
  timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
