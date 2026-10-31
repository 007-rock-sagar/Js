const promiseOne=new Promise(function(resolve,reject){
    //do a sync task
    //DB calls,cryptography,network 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000);

})

promiseOne.then(function(){
    console.log('promise consumed')
});

//we can also use the new promise without storing it i vbl
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async tasjk2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})
//Task 3 Data Consumption in promise-
//3rd promise
//here we can passs data from the work done by function
//here we will pass generally object
const promisethreee=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"chai",email:"sagar@23345"})
    },1000)
})

promisethreee.then(function(user){
 console.log(user)
})

//4th promise
//task 4

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        error=false
        if(!error){
            resolve({username:"sagar",password:"123"})
        }
        else{
            reject('Error:Something went wrong')
        }
     
    },1000)
})

promisefour
.then((user)=>{
    console.log(user)
    //we need to do chaining we cannot directly do many things
    //so we can do .then many times as we want
   // return user.username
})
.then(function(username){
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})

//use finally


const promisefour2=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        error=false
        if(!error){
            resolve({username:"sagar",password:"123"})
        }
        else{
            reject('Error:Something went wrong')
        }
     
    },1000)
})

promisefour2
.then((user)=>{
    console.log(user)
    //we need to do chaining we cannot directly do many things
    //so we can do .then many times as we want
   // return user.username
})
.then(function(username){
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(function(){
    console.log("The promise is either resolved orr rejected")
})

//Promise five
//use async await 
//it is same like .then.catch

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        //error=false
        if(!error){
            resolve({username:"js",password:"123"})
        }
        else{
            reject('Error:js went wrong')
        }
     
    },1000)
})
//using async await instead of .then()and.catch()
async function consumepromisefive(){
    try{
       const response=await promisefive
       console.log(response)
    }
   catch(error){
    console.log(error);
   }
}
consumepromisefive()

//next class ki tayARI
async function getAllusers(){
  try {
      const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    //   console.log(response)
     const data=await response.json()
     console.log(data)
  } catch (error) {
    console.log("E",error)
  }
}
getAllusers()

//dong the above by ,then nd ,catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))
