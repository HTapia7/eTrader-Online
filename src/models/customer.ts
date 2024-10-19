import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: {
      type: String,
      required: true,
      trim: true
  },
  city: {
      type: String,
      required: true,
      trim: true
  },
  state: {
      type: String,
      required: true,
      trim: true
  },
  postalCode: {
      type: String,
      required: true,
      trim: true
  },
  country: {
      type: String,
      required: true,
      trim: true
  }
});

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    address: addressSchema, // Include the address schema here
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
