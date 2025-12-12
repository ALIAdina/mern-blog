const express= require('express');
const cors =require('cors');
const app =express();
app.use(cors());
app.use(express.json());

app.post('/register',(req,res)=>{
    console.log('Requête reçue !');          // debug : la route est-elle appelée ?
    console.log('req.body:', req.body); 
    const{username,password}=req.body;
    res.json({requestData:{username,password}});

    //res.json({ message: 'test', data: req.body });
});

app.listen(4000);
