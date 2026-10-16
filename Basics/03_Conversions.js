let score=33
console.log(typeof score);
console.log(typeof(score))

let charnum="33abc"
let valueinnum=Number(charnum)
console.log(typeof valueinnum)//number
console.log(valueinnum)//NaN-->Not a Number-->it is also a type


let charnum2=null
let valueinnum2=Number(charnum2)
console.log(typeof valueinnum2)//number
console.log(valueinnum2)//0

let charnum3=undefined
let valueinnum3=Number(charnum3)
console.log(typeof valueinnum3)//number
console.log(valueinnum3)//NaN

let charnum4=true
let valueinnum4=Number(charnum4)
console.log(typeof valueinnum4)//number
console.log(valueinnum4)//1

let charnum5="abc"
let valueinnum5=Number(charnum5)
console.log(typeof valueinnum5)//number
console.log(valueinnum5)//NaN-->Not a Number-->it is also a type


//Convert into bool
let chk=1
let chkinbool=Boolean(chk)
console.log(chkinbool)

let chk2=""
let chkinbool2=Boolean(chk2)
console.log(chkinbool2)//false

let chk3="Sagar"
let chkinbool3=Boolean(chk3)
console.log(chkinbool3)//true

//converty  to string
let num=1
let numtostr=String(num)
console.log(numtostr)
console.log(typeof numtostr)

//all these conversion types  starts with Upprcase lettes 