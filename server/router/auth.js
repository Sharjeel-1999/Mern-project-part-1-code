const { error } = require("console");
const express = require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const router = express.Router();
require("../Db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("<h1>HELLO THIS IS MY Router.js  HOMEPAGE</h1>");
});

router.post("/register", async (req, res) => {
  //object destructureing kreingy istrha bilkul simple hee krke simple console mee easily serf variable likh kr data mangwalengy   const{name,email,work,phone,password,cpassword}=req.body;

  const { name, email, work, phone, password, cpassword } = req.body;
  //ye if ki form validation heee is trhaa users ko sara data denaaa paregaa apnaa warnaaa woo form login nahi krsakegaa bechara
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please field all theee inputs" });
  }

  // else{
  //   res.json({success:"all data are run succss"})
  // }
  //Database mee data save krwaya heee yaha perrr this is very basic method
  User.findOne({ email: email }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: "Email already Exits" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password is worng bacha" });
    } else {
      //save krny see phleee hm yaha per password hash kaa method lgayengy
      const user = new User({ name, email, work, phone, password, cpassword });
    }
    const user = new User({ name, email, work, phone, password, cpassword });
  
    user.save()
      .then(() => {
        console.log(`${user} User register sucess`);
        // console.log(userRegister)
        res.status(201).json({ massage: "Data Save sucessfully" });
      })
      .catch((err) => {
        res.status(500).json({ err: "Data Save failed" });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //   console.log(name,phone)
  // console.log(req.body.name);
  // console.log(req.body.email);
  // res.send("mera fast page")
  // res.json({massage:req.body})
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json("please Filled the correct data");
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);
    if(userLogin){
      const MatchPassword=await bcrypt.compare(password,userLogin.password);
      const token= await userLogin.generateAuthToken();
      console.log(token)
      res.cookie("jwtoken",token,{
        expires:new Date(Date.now()+2589200000),
        httpOnly:true
      })
      if (!MatchPassword) {
        res.json("User Password Error");
        //kbh bh ye matt likhu invalid email yaa invalid password jesa mene upper likha hwa hee mene tw isliy likha hee qk ptaa tww chale thik see kam kr raha he ya nahi 
      } else {
        res.json("User Login Success");
      }
    }else{
       //kbh bh ye matt likhu invalid email yaa invalid password jesa mene upper likha hwa hee mene tw isliy likha hee qk ptaa tww chale thik see kam kr raha he ya nahi 
      res.json("User Email Error");
    }
   
  } catch (err) {
    console.log(err);
  }
  // console.log(req.body);
  // res.json("its awosome")
});

module.exports = router;

//  Using promises
// router.post("/register",async (req, res) => {
//   //object destructureing kreingy istrha bilkul simple hee krke simple console mee easily serf variable likh kr data mangwalengy   const{name,email,work,phone,password,cpassword}=req.body;

//  const { name, email, work, phone, password, cpassword } = req.body;
//   //ye if ki form validation heee is trhaa users ko sara data denaaa paregaa apnaa warnaaa woo form login nahi krsakegaa bechara
//   if (!name || !email  || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error:"please field all theee inputs"});
//   }

//   // else{
//   //   res.json({success:"all data are run succss"})
//   // }
//   //Database mee data save krwaya heee yaha perrr this is very basic method
//   User.findOne({email:email})
//   .then((userExist)=>{
//     if(userExist){
//       return res.status(422).json({ error:"Email already Exits"});

//     }
//     const user= new User({ name, email, work, phone, password, cpassword});
//     user.save().then(()=>{
//       res.status(201).json({massage:"Data Save sucessfully"})
//     }).catch((err)=>{
//       res.status(500).json({ err:"Data Save failed"})
//     }).catch((error)=>{
//       console.log(error);
//     })
//   })

// //   console.log(name,phone)
//   // console.log(req.body.name);
//   // console.log(req.body.email);
//   // res.send("mera fast page")
//   // res.json({massage:req.body})
// });
