import express  from "express";
import cors from 'cors';


const app=express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send("App running perfectly!!!");
});

app.get('/:id',(req,res)=>{
    res.send(req.params.id);
});

const port=process.env.port || 5000;

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});