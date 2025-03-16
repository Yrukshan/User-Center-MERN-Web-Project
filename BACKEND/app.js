//zGZRrfjZoYDqeyx5

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");



const app = express();
const cors = require("cors");

//Middeleware

app.use(express.json());
app.use(cors());
app.use("/Users",router);


mongoose.connect("mongodb+srv://admin:zGZRrfjZoYDqeyx5@cluster0.qphec.mongodb.net/")
.then(()=> console.log("Connected to mongoDB"))
.then(()=> {
    app.listen(5000);
})


.catch((err)=> console.log((err)));

//Register.......
//Call Register Model


const User = require("./Model/Register");
//const User = mongoose("Register");
app.post("/register", async(req, res)=>{

    const {name,gmail,password} = req.body;

    try{
        await User.create({
            name,
            gmail,
            password,
        })
        res.send({status:"ok"});
    }catch(err) {
        res.send({status:"err"});
    }
});


//Login........

app.post("/login", async (req, res) => {
    const { gmail, password } = req.body;
    try {
      const user = await User.findOne({ gmail });
      if (!user) {
        return res.status(400).json({ err: "User not Found" });
      }
      if (user.password === password) {
        return res.json({ status: "ok" });
      } else {
        return res.status(400).json({ err: "Incorrect password" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: "Server Error" });
    }
  });
  