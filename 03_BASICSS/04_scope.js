function one(){
    const username="Sagar"
    function two(){
        const website="youtube"
        console.log(username)
    }
  //  console.log(website)//will give error as website scope is not outside the {}
    two()
}
one()

//if el;se
if(true){
    const username="sagar"
    if(username==="sagar"){
            const website="youtube"
        console.log(username+website)
    }
   // console.log(website)
}
//console.log(username)

//
//we can call function even before declaration \\
console.log(addone(3))
function addone(num){
    return num+1
}
//++++++++++++++++intersting+++++++++++
//expressiion -->in js a vbl can store everything even function

//but when we store a func in a vbl as expression then we cannot call it before function declaration
const addtwo=function(num){//expression we call it
    return num+2
}
addtwo(5)
console.log(addtwo(4))


//but when we store a func in a vbl as expression then we cannot call it before function declaration
//console.log(addthree(4))//error
addtwo(5)
const addthree=function(num){//expression we call it
    return num+2
}

