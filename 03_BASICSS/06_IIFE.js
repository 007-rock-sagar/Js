//to avoid pollution of global vbls we use IIFE
//()()----the first is for func and other is for call
function chai(){
    console.log('DB CONNECTED')
}
chai();
// ; is used to end any invoked functiton
//+++++++IIFE+++++++++
//1. Named IIFE
(function chai(){
    console.log('DB CONNECTED')
}) ();
//2.unnamed IIFE
// inside() arrow function
( ()=>{console.log("Sagar we are in an arrow function")} )();

//pass a parameter
( (name)=>{console.log(`${name} we are in an arrow function`)} )("rajkumarsir");