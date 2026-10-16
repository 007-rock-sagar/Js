///Primitive-->
// 7 types
//call by value-->changes doesnot occur in actual real vbl but in the copied val only

//String,Number,Boolean,null,undefined,Symbol,BigInt



//Non-Primitive(Reference)
//call by reference-->changes  occur in actual real vbl
//Arrray,Objects,Functions

//1.Array
//Yes, JavaScript arrays can hold elements of multiple data types simultaneously.
//type of any non primitive is object or object function as function of function datatype 
const heros=["Sagar","Shaktiman","doga",1,true]
console.log(heros)
console.log(typeof heros)
//2.object
//object is like dictionary->key:value pair
let myobj={
    name:"Sagar",
    age:23,
    isstudent:true
}
console.log(myobj)
console.log(typeof myobj)

//3.Functions
const myfunc=function(){
    console.log("Sahatr")
};
console.log(typeof myfunc)

//javascript is  dynamic type language
/*JavaScript is a dynamically typed language, meaning variables are not bound to a fixed type. The type is determined at runtime, and a variable can hold different types of values during execution. This contrasts with statically typed languages like Java or C#, where the type is declared and checked at compile time.*/
const score=100
const sc="ds"
let use//undefined//
//but in ts(static )
//const score:number=100

//Symbol
const id=Symbol('124')
const anotherId=Symbol('124')
console.log(typeof id)//symbol
console.log(id===anotherId)//f as even though the val is same but the symbol makes them unique to itself

//bigint
const bignu=73463746n
console.log(typeof bignu )

