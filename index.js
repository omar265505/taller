const express=require("express");
const app =express();
const { pokedex } =require('./pokedex.json');

app.get("/",(req,res,next)=>{ 
   res.status(200);
    res.send("bienvenido al pokedexx");
    });
app.get("/pokemon",(req,res,next)=>{
res.status(200);
res.send(pokemon);
});
app.get("/pokemon/:id([0-9]{1,3})",(req,res,next)=>{
    const id =req.params.id - 1;

    if (id=> 0 && id <= 150){
        res.status(200);
      return  res.send(pokemon[req.params.id - 1]);
    } 
        res.status(404);
        res.send("pokemon no encontado");
    
    });
    app .get('/pokemon/:name'),(req,res,next)=>{
        const name = req.params.name;
        for(i=0;i<pokemon.length;i++){
          if(pokemon[i].name==name){
              res.status();
              res.send(pokemon[i]);
          }  
          res.status(404);
        res.send("pokemon no encontado");
        }
    }

app.listen(process.env,PORT ||3000,()=>{
console.log("server is runing ");
});
