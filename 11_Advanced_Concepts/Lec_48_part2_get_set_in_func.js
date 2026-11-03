c/*class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    //by default every vbl and methods have getter and setter in the class 
    //but if we want to manually do this we need to write both getter and setter 
    //if we only write one thing then we would get error
    get password(){
        return this.password.toUpperCase()
    }
    set password(value){
        this.password=value.toUpperCase();
    }
}


const hitesh=new User("hitesh.ai","123")
console.log(hitesh.password);
*/
//in the above we have both things same in constructor and setter .i.e. this.passsword=value
//so there is a race condition bw them to set password
//so in order to prevent this we will use different name other than what constructor has used

class User2{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
   //now _password is set by getter and setter without interepting the constructor
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value.toUpperCase();
    }
}

const hitesh=new User2("hitesh.ai","abc")
console.log(hitesh.password);
