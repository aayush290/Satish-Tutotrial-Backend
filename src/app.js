const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const DB = 'mongodb+srv://admin:admin@cluster0.xitdvv5.mongodb.net/?retryWrites=true&w=majority'

   var fullName;
   var mobile;
   var address;
   var std;
   var email;
   var password;

mongoose.connect(DB).then(() => {
    console.log("Connection successfull");
}).catch((e) =>{
    console.log("Error connecting");
})

// 1.Schema Models start =====================================================================================
const userSchema = mongoose.Schema({
    fullName: String,
    mobile: String,
    address: String,
    std: String,
    email: String,
    password: String
  })


// Schema Models end =======================================================================================

// Mongo Models start =====================================================================================
const User = new mongoose.model('User', userSchema);
// Mongo Models end =======================================================================================

// 2.Schema Models start =====================================================================================
const admissionSchema = mongoose.Schema({
    firstName: String,
    fatherName: String,
    surname: String,
    motherName: String,
    fatherMobile: String,
    motherMobile: String,
    address: String,
    std: String,
    email: String,
    school: String,
    dob: String
  })
// Schema Models end =======================================================================================

// Mongo Models start =====================================================================================
const Admission = new mongoose.model('Admission', admissionSchema);
// Mongo Models end =======================================================================================

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get("/", (req,res) => {
    res.render("index");
    console.log("working index");
})

app.get("/admission", (req,res) => {
    res.render("admission");
    console.log("working admission");
})

app.post("/admission", (req,res) =>{
    Admission.create([
        {firstName: req.body.firstName,
        fatherName: req.body.fatherName,
        surname: req.body.surname,
        fatherMobile: req.body.fatherMobile,
        motherMobile: req.body.motherMobile,
        address: req.body.address,
        std: req.body.std,
        email: req.body.email,
        school: req.body.school,
        dob: req.body.dob}]);
        res.redirect("admission");
        window.alert("Data Inserted Successfully");
})

app.get("/contact", (req,res) => {
    res.render("contact");
    console.log("working contact");
})

app.get("/courses", (req,res) => {
    res.render("courses");
    console.log("working courses");
})


app.get("/home", (req,res) => {
    res.render("home");
    console.log("working home");
})

app.get("/toppers", (req,res) => {
    res.render("toppers");
    console.log("working toppers");
})

app.get("/faculty", (req,res) => {
    res.render("faculty");
    console.log("working faculty");
})

app.get("/login", (req,res) => {
    res.render("login");
    console.log("working login");
})

app.post('/login', (req,res) => {
    User.find({email:req.body.username}, function(error,foundUser){
        if(foundUser == null){
            res.send('index')
        }
        if(error){
            console.log(error);
        }
        else{
            foundUser.forEach(function(user){
                if(user.email == req.body.username){
                        if(user.password == req.body.password){
                            res.redirect("dash")
                            console.log("working user login dashborard");
                            fullName = user.fullName;
                            std= user.std;
                            address= user.address;
                            email= user.email;
                            mobile= user.mobile;
                            }
                        }
                        else{
                            res.render("index");    
                        }
                    })
            }
        })
})

app.get("/dash", (req,res) => {
        res.render("dash",{
            fullName: fullName,
            std: std,
            address: address,
            email: email,
            mobile: mobile
        })
        console.log(fullName)
})



app.listen(5000, (req,res)=>{
    console.log("Connected to port 5000");
})

