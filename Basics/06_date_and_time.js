let  mydate=new Date()
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toString())
console.log(mydate.toTimeString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())

console.log(typeof mydate)//object
//create date
let createddate=new Date(2023,0,8)// months start with 0->jan
console.log(createddate)

let createddate2=new Date(2023,0,8,5,8,4)// months start with 0->jan
console.log(createddate.toLocaleString())

console.log(new Date("2023-02-9"))
//Timestamps
let currtimestmp=Date.now()
console.log(currtimestmp)
let newdate=new Date()
console.log(newdate.getTime())
console.log(newdate.getMonth())
console.log(newdate.getDay())

//most used way
let newdate3=new Date()
console.log(newdate3.toLocaleString('default',{
    weekday:"long"

}))