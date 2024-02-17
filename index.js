require("dotenv").config();
const express= require("express");
const mongoose = require("mongoose");
const app = express();
const MONGO_CONNECTION=process.env.MONGO_CONNECTION;
const todoRoute = require("./routes/todoroutes");
//const userRoute=require("./routes/userRoute");

//app.get("/", function (req, res){
 //  res.render("index");
//});

app.use(express.json());



// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


//student route
app.use("/todo",todoRoute);

//app.use("/auth",userRoute);

mongoose.connect(MONGO_CONNECTION)
.then(()=>{
    console.log("connected to mongodb cloud");
    app.listen(3003,()=>{
        console.log('Node api app is running on port 3003');
    });
})
.catch((error)=>{
    console.log(error);
});

//app.listen(3000);