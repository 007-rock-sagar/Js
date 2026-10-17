
// if(true){
//    let a=10
// const b=20
// var c=33

// }
// //console.log(a)
// //console.log(b)
// console.log(c)

//bahar wala global scope
var c=300
if(true){//andar wala block scope
   let a=10
const b=20
var c=33

}
//console.log(a)
//console.log(b)
console.log(c)


//var c=300
let a=900
if(true){//andar wala block scope
   let a=10
const b=20
console.log("INNER",a)

}
//console.log(a)
//console.log(b)
console.log(a)