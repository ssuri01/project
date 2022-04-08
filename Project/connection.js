const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://ssuri:sagarika007@cluster0.7naah.mongodb.net/members?retryWrites=true&w=majority`;


mongoose.connect(mongoDB);

module.exports = mongoose.connection;