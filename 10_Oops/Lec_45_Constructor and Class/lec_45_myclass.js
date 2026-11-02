class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptpassword(){
        return `${this.password}abc123`
    }
    formatusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("chai","chai@gmail.com","123")
console.log(chai.encryptpassword())
console.log(chai.formatusername())

//behind the scene
//how this class is working?
function User2(username,email,password){
   this.username=username;
   this.email=email;
   this.password=password;
}
User2.prototype.encryptpassword=function(){
     return `${this.password}abc123`
}
User2.prototype.formatusername=function(){
    return `${this.username.toUpperCase()}`
}

const chai2=new User2("coffee","coffee@gmail.com","789")
console.log(chai2.encryptpassword())
console.log(chai2.formatusername())
