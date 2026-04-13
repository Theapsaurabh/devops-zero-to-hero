const express= require("express");
const app= express();
app.get("/",(req,res)=>{
    console.log("hello i am here to write dockerfile and learn docker ")
    res.send("Hello World");
})
app.listen(3000);