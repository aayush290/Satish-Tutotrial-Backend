const mongoose = require("mongoose");
const DB = 'mongodb+srv://admin:admin@cluster0.xitdvv5.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB).then(() => {
    console.log("Connection successfull");
}).catch((e) =>{
    console.log("Error connecting");
})
