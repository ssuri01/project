const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PackageSchema = new Schema({
    plan: {
        type: String,
        enum: ['Weekly', 'Monthly', 'Yearly'],
        required: [true, "package is required"]
    }
});

exports.Package = mongoose.model("Package", PackageSchema);