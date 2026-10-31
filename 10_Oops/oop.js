const user={
    username:"Sagar",
    roll:'2353010',
    signedin:'true',
    userdetails:function(){
       console.log("Got user details from database");
       console.log(`username:${this.username}`)
       console.log(this)
    }

}
console.log(user.username)
console.log(user.userdetails())
console.log(this)


// <!--Constructor-->
function users(username,cntfollowers,isloggeddin){
    this.username=username;
    this.cntfollowers=cntfollowers;
    this.isloggeddin=isloggeddin;

    this.greetings=function(){
        console.log(`Wlcome ${this.username}`)
    }
    return this
};
//when we not use new to create new objects
//the values get overided by usertw 
//so we need to use new keyword
// const userone=users("Sagar",22,true);
// const usertwo=users("chai",23,false);
// console.log(userone);

//with new keyword
const userone=new users("Sagar",22,true);
const usertwo=new users("chai",23,false);
console.log(userone);
console.log(usertwo)

console.log(userone.constructor)
//getting constructor methods and vbls
console.log(usertwo.username)
