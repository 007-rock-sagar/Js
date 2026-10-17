//singleton
//created object from object literals are not singleton
//created from constructor are always singleton

//using constructor
//const obj=Objects.Create

//2.object literals
const mysum=Symbol("Key1")//vvi
const jsuser={
    name:"sagar",
    "full_name":"Sagar Kumar",
    age:18,
    [mysum]:"mykey1",//we cant declare it like mysum we need to use [mysum]
    email:"sagar@2005",
    address:"Jaipur",
    loggedin:"Yes",
    lastloggedin:["Monday","Tuesday","Saturday"]

}
//get the values using '.'

console.log(jsuser.email)//it is not a good way
//we can use []
//console.log(jsuser[email])//wrong keep in ""
console.log(jsuser["email"])
//console.log(jsuser.full name)
//we cant access the full name from '.' as it is stored as string so we need []
console.log(jsuser["full_name"])
console.log(typeof jsuser[mysum])//string
console.log( jsuser[mysum])

//we can override the val
jsuser.email="ramji@2005"
console.log(jsuser["email"])


//w can create obj parameter from outside also
jsuser.new="raj"//
console.log(jsuser)

//FREEZE 
//use this so thst th object can never be modified
console.log(jsuser)
//Object.freeze(jsuser)
jsuser.email="rajaram@2004"
console.log(jsuser)

//Adding a func to object 
//A func is treated as regular vbl
jsuser.greetings=function(){
    console.log("Hey created greeting from outside..Welcome")
}
console.log(jsuser.greetings)//this giveds func reference [Function (anonymous)]
console.log(jsuser.greetings())
//
//
jsuser.greetings2=function(){
    console.log(`Hey,${this.name} created greeting from outside..Welcome`)
}
console.log(jsuser.greetings2())
