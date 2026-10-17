//singleton
const tinderuser=new Object()
//non singleton
const tinderuser2={}
console.log(tinderuser)
console.log(tinderuser2)

tinderuser.id="123asd"
tinderuser.name="sammy"
tinderuser.isloggedin=false
console.log(tinderuser)

//nested object
const userreg={
    email:"sagar@2005",
    fullname:{
        firstname:"Sagar",
        lastname:"kr"
    }

}
console.log(userreg.fullname.lastname)

//combine objects
const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'d',5:'e',6:'f'}
//const obj3={obj1,obj2}//wrong way of combining as the same prob occcured as in array 
const obj3=Object.assign(obj1,obj2)
// a good approac is to keep an empty {} in start
const obj4=Object.assign({},obj1,obj2)//it acts as a src and the remaining as objects to be filled in the src

//but 90 % of time uwe will use the spread operator as we uswe in array
const obj5={...obj1,...obj2}
console.log(obj3)
console.log(obj4)//it guranttees that the 
console.log(obj5)

//getting all the keys of object
console.log(Object.keys(tinderuser))//output is array
console.log(Object.values(tinderuser))//output is array
console.log(Object.entries(tinderuser))

//checking if present
console.log(tinderuser.hasOwnProperty("email"))