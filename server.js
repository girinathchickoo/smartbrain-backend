const express=require('express');
const bcrypt=require('bcrypt-nodejs');
const cors=require('cors');
const app=express();
var knex = require('knex');
const register=require("./controllers/register");
const signin=require("./controllers/signin");
const profile=require("./controllers/profile");
const image=require("./controllers/image");
const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '7018',
    database : 'face'
  }
});

app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
	res.send(database.users)

})

app.post('/signin',(req,res)=>signin.handlesignin(req,res,db,bcrypt));
app.post('/register',(req,res)=>register.handleregister(req,res,db,bcrypt));
app.get('/profile/:id',(req,res)=>profile.handleprofile(req,res,db));
app.put('/image',(req,res)=>image.handleimage(req,res,db));
app.post('/imageurl',(req,res)=>image.handleapicall(req,res));
const PORT=process.env.PORT
app.listen(PORT,()=>{console.log(`http://localhost:${PORT}`)})

