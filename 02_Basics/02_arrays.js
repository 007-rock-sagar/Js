//"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"

let arr=[2,34,5,6,78]
console.log(arr)
console.log(arr[0])//undefined

console.log(arr[-1])//undefined
console.log(arr[7])
console.log(arr[3])
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//Array indices

//create array s obj
let newarr4=new Array(1,2,3,4)
console.log(newarr4[3])
///Array Maethods
newarr4.push(33)
console.log(newarr4)
newarr4.pop()
console.log(newarr4)

newarr4.unshift(33)//push in start

console.log(newarr4)

console.log(newarr4.includes(7))
console.log(newarr4.indexOf(44))

//use join to convert to string 
const newarr23=newarr4.join()
console.log(newarr23)
console.log(typeof(newarr23))//String

//Slice and splice
let myarr1=newarr4.slice(1,3)
console.log("A",myarr1)

let myarr2=newarr4.splice(1,3)///it sliced the  original array
console.log("B",myarr2)
console.log(myarr2)
