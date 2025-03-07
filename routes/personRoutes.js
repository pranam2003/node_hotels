const express=require('express');
const routes=express.Router();
const Person=require('./../models/Person'); 
routes.post('/',async (req,res)=>{
    try{
    // res.send("data is saved");
    const data = req.body // assuming the request body contains the person data
    const newperson= new Person(data);

   
    const response= await newperson.save();
    console.log("data saved");
    res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
}) 
// getting person data
routes.get('/' , async(req,res)=>
{
    try{
        const data= await Person.find()
        console.log("data fecth");
        res.status(200).json(data);


    }
        catch(err){
            console.log(err);
        res.status(500).json({error:"internal server error"});

        }
    
})
routes.get('/:workType',async(req,res)=>
{
    
        try{
            const workType=req.params.workType;
    if(workType=="chef" || workType=="waiter"|| workType=="manager"){
        const data= await Person.find({work:workType})
        console.log('response is fetched');
        res.status(200).json(data);

        }else{
            res.status(404).json({error:'invalid work type'});
        }
    }
        catch(err)
        {
console.log(err);
        res.status(500).json({error:"internal server error"});
        
         
    }
})
routes.put('/:id',async (req,res)=>{// id is variable
    try{
         const personid=req.params.id;// extract id from url parameter
         const updatedpersondata =req.body;// updated data for the person
         const response= await Person.findByIdAndUpdate(personid,updatedpersondata,{
            new:true,// return the updateddocument
            runValidators:true, // run mangoose validation

         })
         if(!response){
            return     res.status(404).json({error:"person not found"});
         }
         console.log("data updated");
         res.status(200).json(response);

    }
    catch(err){
        res.status(500).json({error:"internal server error"});

    }
})
routes.delete('/:id',async(req,res)=>
{
    try{
       const personid=req.params.id;
       const response=await Person.findByIdAndDelete(personid) ;
       if(!response){
        return     res.status(404).json({error:"person not found"});
     }
     console.log("data deleted");
     res.status(200).json({message:"person deleted susscesfully"});

    }
    catch{
        res.status(500).json({error:"interna-l server error"});

    }
})
module.exports=routes;