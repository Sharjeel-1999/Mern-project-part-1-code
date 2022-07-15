const dotenv = require("dotenv");
const express = require("express");
const app = express();
// const port=1000;
app.use(express.json());

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

require("./Db/conn");
app.use(require("./router/auth"));
// const User=  require("./model/userSchema");

app.listen(port, () => {
  console.log(`server is running" ${port}`);
});










//     const middlewear=(req,res,next)=>{
//     console.log("Hello My new MiddleWear");
//     next();
//     }
//     app.get("/",(req,res)=>{
//         res.send("<h1>HELLO THIS IS MY HOMEPAGE</h1>")
//     })
//     app.get("/about",middlewear,(req,res)=>{
//         res.send("<h1>HELLO THIS IS MY ABOUT PAGE</h1>")
//     })
//     app.get("/contact",(req,res)=>{
//         res.send("<h1>HELLO THIS IS MY CONTACT PAGE</h1>")
//     })
//     app.get("/signin",(req,res)=>{
//         res.send("<h1>HELLO THIS IS MY SIGN-In PAGE</h1>")
//     })
//     app.get("/signup",(req,res)=>{
//         res.send("<h1>HELLO THIS IS MY SIGN-UP PAGE</h1>")
//     })
// })
