function saymyname(){
console.log("S")
console.log("A")
console.log("G")
console.log("A")
console.log("R")
}
//saymyname//it is just the reference
saymyname()
//
//Add 2 nums
function addtwonum(num1,num2){//num1,num2 are parameters
   console.log( num1+num2)
}
addtwonum(4,4)//4,4 are arguments

addtwonum("9",4)//js thougty both are chars

//can we store?
const result=addtwonum(4,8)
console.log("result",result)//herere we will study return type of func

function addtwonum2(num1,num2){//num1,num2 are parameters
   let result=num1+num2
   console.log("sagar")
    return result

}

const result2=addtwonum2(4,8)
console.log("result",result2)//herere we will study return type of func

//
function loginusermsg(username){
 return `${username} just logged in`
}
console.log(loginusermsg("Sagar"))

//func with if else
    function loginusermsg2(username){
        if( username===undefined){
            //or if(!username)
            console.log("Please Enter a username");
            return
        }
 return `${username} just logged in`
}
console.log(loginusermsg2())

//default parameter
function loginusermsg3(username="Jatin"){
 return `${username} just logged in`
}
console.log(loginusermsg3())
console.log(loginusermsg("Sagar"))