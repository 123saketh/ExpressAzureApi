import express  from "express";


const app=express();



app.get('/',(req,res)=>{
    res.send("App running perfectly!!!");
});

const port=process.env.port||    5000;

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});