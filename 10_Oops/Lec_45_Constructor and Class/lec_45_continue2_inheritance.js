class User{
    constructor(username){
        this.username=username
    }
    createid(){
        return `123`
    }
    static loginid(){
        return `${this.username}abc`
    }
}

const hitesh=new User("hitesh")

console.log(hitesh.createid())
//console.log(hitesh.loginid())//this throws error as the loginid function is static

class Teacher extends User{
    constructor(username,email){
        super(username)
         this.email=email
    }
}

const iphone=new Teacher("iphone","i@Phone.com")
//console.log(iphone.logme());//even the instance of User which is teacher cannot acces the static func


class Teacher2 extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone2=new Teacher2("iphone","i@phone.com")
console.log(iphone2.createid())
