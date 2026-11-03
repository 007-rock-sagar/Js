//our aim is to overide or change the value of any constant that is fixed in js
//here we take PI of MATH library

//let's try frst
console.log(Math.PI)
Math.PI=90
console.log(Math.PI)//it is not overided
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)

//lets make our own object and try to define our own controlled properties on it 
const chai={
    name:"ginger chai",
    price:123,
    isAvailable:true
}

//now lets play with the name prop of chiai 
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

//lets run loop f
/*
for (let [key,value] of chai) {
    console.log(`${key},${value}`)
}
//the above loop will give error as chai is an object so not iterable
*/
for (let [key,value] of Object.entries(chai)) {
    console.log(`${key},${value}`)
}

//What if we have function in object
//so we need to handle them using if else
    const school={
        name:"primary",
        fee:12345,
        isModern:true,
         admisiion:function (){
            console.log("Admission is done")
        }
    }



    for (let [key,value] of Object.entries(school)) {
    console.log(`${key},${value}`)
}

for (let [key,value] of Object.entries(school)) {
    if( typeof value!=='function'){
    console.log(`${key},${value}`)
}
}

//lets make name of school enumerable=false
//which will prohibit a loop to iterate over it
    const school2={
        name:"Secondary",
        fee:12345,
        isModern:true,
         admisiion:function (){
            console.log("Admission is done")
        }
    }

Object.defineProperty(school2,'name',{
    enumerable:false
})

for (let [key,value] of Object.entries(school2)) {
    if( typeof value!=='function'){
    console.log(`${key},${value}`)
}
}
