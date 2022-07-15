const mongoose=require("mongoose");
const DB=process.env.DATABASE;


mongoose.connect(DB,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUNfiedTopology:true,
    // useFindAndModify:false
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connection success")
}).catch(()=>{
    console.log("no Connection Error");
});
