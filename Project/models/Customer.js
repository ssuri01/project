const mongoose = require('mongoose');
const { Package } = require('./Package.js')
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    cname: {
        type: String, required: [[true, 'name is required'], 'name is required'],
        maxlength: [50, 'length must be less than 50'],
        minlength: [1, 'length must be greater than 1'],
        trim: true
    },

    email: {
        type: String, required: [true, 'email is required'],
        pattern: ['^[A-Za-z0-9+_.-]+@(.+)$', 'the format of email is incorrect'],
        format: 'email'
    },
    age: {
        type: Number, min: [18, 'min age should be 18'], max: [85, 'max age should be 85']
    },
    sex: {
        type: String,
        enum: {
            values: ['Male', 'Female', 'Others'],
            message: '{VALUE} is not supported'
        },
        default: 'Female'
    },
    weight: {
        type: Number, min: [50, 'min weight should be 50'], required: [true, 'weight is required'],
    },
    height: {
        type: Number, required: [true, 'height is required'], min: [120, 'min height should be 4ft']
    },
    plan:
    {
        type: Schema.Types.ObjectId, ref: 'Package'
    }
})

exports.Customer = mongoose.model("Customer", CustomerSchema);
