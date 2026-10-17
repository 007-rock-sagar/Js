//Shopping carts problem in which we dont know how much args is required
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200))
console.log(calculateCartPrice(200,399,300))

//rest and spread
//rest ...num1
function calculateCartPrice2(...num1){
    return num1
}
console.log(calculateCartPrice2(200,399,300))//return arrsy of params
//...num1 means all the reat args are num1

function calculateCartPrice3(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice3(200,399,333,300))//in this only the except first two args they are val1 and val2 remaining ar enums1


//use of anyobject
user={
    username:"sagar",
    age:22
}

function loginuser(anyobject){
  console.log(`username is ${anyobject.username}' and age is ${anyobject.age}`)
}
console.log(loginuser(user))
console.log(loginuser({username:"Sagar",age:22}))//here directly passing the object as argument

//passing array
const mynewarr=[2,3,4,5]

function returnsecondval(getarray){
    return getarray[2]
}
console.log(returnsecondval(mynewarr))
console.log(returnsecondval([22,33,44,55,66]))