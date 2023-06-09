// PS C:\Program Files\nodejs\node_modules\express> git add .
// PS C:\Program Files\nodejs\node_modules\express> git commit -m "changes"
// On branch main
// Your branch is up to date with 'origin/main'.

// nothing to commit, working tree clean
// PS C:\Program Files\nodejs\node_modules\express> git push -u origin main

//const forgotPasswordEMail = require("C:/Program Files/nodejs/node_modules/express/models/forgotPasswordEMail.js");
//const userLogin=require("C:/Program Files/nodejs/node_modules/express/models/loginModel")
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const Details=require("./routes/Details");

app.use(express.json());
var cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://beastslayer345:noel014@cluster0.mteioc9.mongodb.net/test", {
  /*userNewUrlParser: true,*/
  useUnifiedTopology: true,
  family: 4,
});
// mongoose.connection.on("error",err=>{
//   console.log("err",err)
// });

// mongoose.connection.on("connected",(err,res)=>{
//   console.log("mongoose is connected")
// });

app.use("/user", userRoutes);
app.use("/user",Details);

app.listen(3000, () => console.log("We can listen to you on port 3000"));
