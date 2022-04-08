const express = require("express");
const app = express();

const connected = require("./connection.js");

connected.once('open', () => {
    console.log("connnected!");
    const server = app.listen(process.env.PORT || 8080, () => console.log("Listening"));
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true })); //parses the form data  

app.use(express.json());  //parse JSON requests made using axios

//this is the middleware
const router = require("./routes/index.js");
app.use(router);

