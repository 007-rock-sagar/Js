let myname="Sagar   "
console.log(myname.trim().length)
//we have a goal to find a method that would do this in one go
//console.log(myname.trueLength)

//as every thing has a higher hierarchy upto object in last 
//so we will inject the function directly to the obect
let superhero=['spiderman','thor','thsnod']
let heropower={
    thor:"Hammer",
    spiderman:"sling",

    getSpiderpower:function(){
      console.log(`spidy power is ${this.spiderman}`);
    }
}
//we will pass to an object
Object.prototype.hitesh=function(){
    console.log("hitesh is present in all objects")
}
//now every thing which is under objects will nw get these properties

heropower.hitesh()
//also since all the arrays,strings,functions are under objects so we can fetch properties from these also
superhero.hitesh()

//Now we will check whether the prop we give to lower things like array can be passed to siblings or to its higher hiersrchy like object?
Array.prototype.Sagar=function(){
    console.log("array cannot pass its own properties to object and other things like strings,function etc")
}
superhero.Sagar()//it worked
//heropower.Sagar()//error as heropower is function
//Object.Sagar()

// Prototype INHERITANCE
const user={
    username:"Sagar",
    email:"sagar@gmail.com"
}
const teacher={
    makevideos:true
}
const teachingSupport={
    isAvailable:false
}
const TAsupport={
    makeAssignments:'JS assignments',
    fulltime:true,
    //use __proto__
 
    __proto__:teacher//now TAsupport can acccess teacher
}

console.log(TAsupport.makevideos)

//also we can use __proto__outside
teacher.__proto__=user

console.log(teacher.username)

//MODERN SYNTAX OF Prototype INHERITANCE
Object.setPrototypeOf(TAsupport,user)

console.log(TAsupport.username)//user properites now passed to TAsuppport


//now back to our goal of introducing a method or property to string
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`True length is:${this.trim().length}`)

}

myname.truelength()
"Sagar   ".truelength()
