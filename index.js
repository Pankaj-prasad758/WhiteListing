import express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    User:{
        type: String
    }
},{timestamps: true})

export const User = mongoose.model("User",userSchema)
console.log("user",);

const app = express();

const port = 4050;
// app.set("trust-proxy", true)
// const whiteList = ["fe80::5f76:76f5:603:7d34%18", "987.654.321.0"];


// app.use((req, res, next) => {
//   const clientIp = req.ip;

//   if (whiteList.includes(clientIp)) {
//     next();
//   } else {
    
//     res.status(403).send("Acess denied");
    
//   }
// });


app.get("/", (req, res) => {
  res.send("hello authorized user!");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
