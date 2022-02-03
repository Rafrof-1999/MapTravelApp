const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/user");

const app = express();
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}).then(() =>{
    console.log("Database Connected")
})
.catch((err) =>{
    console.log(err)
});

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(5500, () =>{
    console.log("Backend Server Running")
})