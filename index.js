const express=require("express");
const app =express();
app.get("/:name",(req,res,next)=>{
    console.log(req.params.name);
    res.send("bienvenido "+req.params.name);
    })
app.get("/:name",(req,res,next)=>{
console.log(req.params.name);
res.send("hola mundo "+req.params.name);
res,status(200);
})

app.listen(3000,()=>{
console.log("si corrio compa ");
});
