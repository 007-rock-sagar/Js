function setusername(username){
    //here complex calculation
    this.username=username
    console.log("called")
}

function createuser(username,email,password){
    this.email=email
    this.password=password

    setusername(username)
    //after calling this you would think that the execution context of this function comes under this createuser func
    //but this is not so
}
const chai=new createuser("chai","chai@google.com","chaiwala")
console.log(chai)
//in the above method the function was  called but it wiped out when its execution completed ,its vbls and things were not stored in stack that cN BE USED by createuser

//There is a spcl method called ".call"  that actually calls that function along with that we need to pass an additional parameter "this" while calling setusername which will save the things in the context of createuser
function createuser2(username,email,password){
    this.email=email
    this.password=password

    setusername.call(this,username)
    //after calling this you would think that the execution context of this function comes under this createuser func
    //but this is not so
}
const chai2=new createuser2("chai","chai@google.com","chaiwala")
console.log(chai2)
