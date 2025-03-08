const express=require('express');
const app=express();
const db=require('./db');
// const Person=require('./models/Person'); 
require('dotenv').config();

const bodyparser=require('body-parser');
app.use(bodyparser.json());  //req.body
const PORT=process.env.PORT || 3000;

// app.get('/' ,function(req,res){
//     res.send("hello welcome");
// })
// app.get('/chicken' ,(req,res)=>{
//     res.send("i would love to server chicken");
// })
// app.get('/idli' ,(req,res)=>{
//     var cust={
//         name:"ravaidli",
//         size:"10cm",

//     }
//     res.send(cust);
// })
// app.post('/Person',async (req,res)=>{
//     try{
//     // res.send("data is saved");
//     const data = req.body // assuming the request body contains the person data
//     const newperson= new Person(data);
//     // newperson.name=data.name;
//     // newperson.age=data.age;
//     // newperson.mobile=data.mobile;
//     // newperson.email=data.email;
   
//     const response= await newperson.save();
//     console.log("data saved");
//     res.status(200).json(response);

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"internal server error"});
//     }
// }) 
// // getting person data
// app.get('/person' , async(req,res)=>
// {
//     try{
//         const data= await Person.find()
//         console.log("data fecth");
//         res.status(200).json(data);


//     }
//         catch(err){
//             console.log(err);
//         res.status(500).json({error:"internal server error"});

//         }
    
// })
// app.get('/person/:workType',async(req,res)=>
// {
    
//         try{
//             const workType=req.params.workType;
//     if(workType=="chef" || workType=="waiter"|| workType=="manager"){
//         const data= await Person.find({work:workType})
//         console.log('response is fetched');
//         res.status(200).json(data);

//         }else{
//             res.status(404).json({error:'invalid work type'});
//         }
//     }
//         catch(err)
//         {
// console.log(err);
//         res.status(500).json({error:"internal server error"});
        
         
//     }
// });

const personRoutes=require('./routes/personRoutes');
// use the routers
app.use('/person',personRoutes); //person is used endpoint instead of using in routesperson like get postC

app.listen(3000,()=>
{
    console.log("listening to port 3000")
});