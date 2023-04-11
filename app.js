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

app.use(express.json());
var cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
app.use("/user", userRoutes);

app.listen(3000, () => console.log("We can listen to you on port 3000"));
