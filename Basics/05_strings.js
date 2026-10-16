const name="Sagar"
const repocnt=22
console.log(name[0])
console.log(name+repocnt+"value")
//not useful syntax to concatenate

//use backticks
console.log(`Hello my name is  ${name} and my repocnt is ${repocnt}`)

//another way of declaring strings
//by using new keyword which creates an string object 
//cconst name="Sagar" this also creates object in backend

const namestr=new String('Harsha')
console.log(namestr[0])
//therer are mabny prototypes of string object 

/*
In JavaScript, a prototype is an internal object that contains built-in methods 
and properties that all objects of a specific type inherit.

When you create a string, it gets access to the String.prototype object. 
This object acts like a toolbox, giving every string you create built-in powers
 to transform text, search for characters, or slice data.
*/
//some of them will we use

console.log(namestr.__proto__)
console.log(namestr.length)
console.log(namestr.toUpperCase)
console.log(namestr.charAt(4))
console.log(namestr.indexOf('t'))//no t so -1
console.log(namestr.indexOf('h'))

//subtr
let nameprt=namestr.substring(0,4)
//let nameprt=namestr.substring(-3,4)//no neg allowed so it default take 0
console.log(nameprt)

//so use slice
//it takes neg value
let name2=namestr.slice(0,3)
let name3=namestr.slice(-1,2)
console.log(name2)
console.log(name3)

//trim replace
const namenew="  sa gar  "
console.log(namenew)
//Removes the leading and trailing white space and line terminator characters from a string.
console.log(namenew.trim())

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url.includes('hitddesh'))

//convert into arrray based onn - or anything
//split(separator,limit)
const url3="https://-hitesh.-com/-hitesh-%20-choudhary"
console.log(url3.split('-'))//split bSED ON -
cc