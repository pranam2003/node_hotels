const mongoose=require('mongoose');
require('dotenv').config();
// const mongooseurl='mongodb://localhost:27017/hotels'
// const mongooseurl ='mongodb+srv://pranam:uLToRhdwCz4VhM47@cluster0.tdgrq.mongodb.net/'

const mongooseurl=process.env.mongodburl;
// const mongooseurl=process.env.MONGODB_URL_LOCAL;
mongoose.connect(mongooseurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})



// get the default connection
const db=mongoose.connection;
//  add event listener connceted is key words
db.on("connected",()=>
{
    console.log("connected to mongodb server");
})
db.on("error",()=>
{
    console.log("error to mongodb server");
})
db.on("disconnected",()=>
{
    console.log("diconnected to mongodb server");
})
module.exports=db;
