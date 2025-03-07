// function add(a, b)
// {
//     return a+b
// }
//   var add =function(a,b)
//   {
//     return a+b;
//   }
// var add=(a,b)=>
//     {return a+b;}
// var result=add(3,2)
// console.log(result)


// (function(a,b){
// console.log("hello")}
// )();


// ^ differnt types of writing functions


// function callback()
// {
//     console.log("this is call back")
// }
// const add=function(a,b,callback)
// {
//     var result=a+b;
//     console.log(result);
//     callback();

// }
// add(21,12,callback);

//2nd type call back function
// const add=function(a,b,callback)
// {
//     var result=a+b;
//     console.log(result);
//     callback();

// }
// add(12,12,()=>console.log("helloo"));



// var fs=require('fs')
// var os=require('os')
// var user=os.userInfo();
// console.log(user.username);
// fs.appendFile('simple.txt','hi'+user.username+'\n',()=>(console.log("file created")))

// const notes = require('./notes.js');
// var age=notes.age;
// var r=notes.add(age,16)
// console.log(age);
// console.log(r);


var _ = require('lodash');
var data=['pranam','pranam',1,2,1,2];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isString(true));


// json to obj convert// and obj to json
const json='{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(json);
console.log(obj);