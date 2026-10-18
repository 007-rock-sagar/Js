//this refers to current context
const user={
    username:"sagar",
    price:222,
    welcomemsg :function(){
        console.log(`${this.username},welcome to website`);//this makes it to use the prresent context
         console.log(this)
         //// It prints the ENTIRE object that currently "owns" or called this method.
    }
}
user.welcomemsg()
user.username="sam"
user.welcomemsg()

console.log(this)//this will give empty object {}as this runs in nodejs environment

/*
🧠 Direct Explanation

The last console.log(this) executes in the global scope (outside of any function or object block). What it outputs depends entirely on where you run this code file:

1. Inside a Node.js Environment (Like standard Codespaces / VS Code terminal)

It outputs an empty object {}.
• Why: In Node.js, each JavaScript file is treated as a module. At the global level, this refers to the module.exports object, which starts completely empty {}.

2. Inside a Web Browser Console (Chrome, Edge, Safari)

It outputs the window object (the global browser window context).
• Why: In browsers, the top-level global context is always the window object, which contains all browser-specific APIs (like window.location, window.document, etc.).

📊 Context Breakdown Summary
*/

//in this we cannot access this.username
function chai(){
    let username="Sagar"
     console.log(this.username)
}
chai()//undefined

function chai(){
   
     console.log(this)
}
chai()
/*• , it points to the huge global object.
What you are seeing is the printout of every single built-in tool, API, and variable the environment owns (like fetch, setTimeout, console, etc.).
*/

/*t is completely logical to think that way! If console.log(this.username) is physically written inside the function block, it feels like it should look at the variables inside that same function block.
However, JavaScript does not work this way because local variables and this live in two entirely different worlds.
Here is the breakdown of why it doesn't see your local variable:

❌ Local Variables are NOT Object Properties

When you create a local variable using let, const, or var inside a function, JavaScript allocates memory for it in a hidden internal structure called the Lexical Environment (or scope stack).
• this can only read keys from an Object.
• A function block is not an object literal.
• Therefore, your local variables never become properties of this.*/

//+++++++Arrow Func++++++++++
const chai2=()=>{
        let username="Sagar"
     console.log(this.username)
}
chai2()//undefibned again

const chai3=()=>{
        let username="Sagar"
     console.log(this)
}
chai3()//empty block{}
/*Your code shows exactly why arrow functions are unique. Arrow functions do not have their own this context at all.
Instead of creating a new this context when the function runs, an arrow function inherits this from whatever code surrounds it (its lexical parent scope).

1. Why does chai3() print an empty block {}?

You wrote this arrow function in the global scope of your file.
• In Node.js (which runs your Codespace), the global context of a file is the module export context, which is an empty object {}.
• Because the arrow function has no this of its own, it looks outside itself, sees that global empty object, and prints it.

2. Why does chai2() still say undefined?

Since this inside chai2 is pointing to that outer global empty object {}:
• It looks inside the empty object {} for a key named username.
• Since {} does not contain username (remember, your let username is just a local variable locked inside the function stack), it returns undefined.*/

// ==========================================
// WHEN TO USE AND NOT USE `this` IN ARROW FUNCS
// ==========================================

// ❌ WHEN IT BREAKS: Object Methods
// Do NOT use arrow functions for object methods if you need the object's properties.
const user3= {
  username: "Sagar",
  // The arrow function inherits 'this' from the global scope outside 'user'
  welcomemsg: () => {
    console.log(this);          // Output: {} (Global empty object in Node)
    console.log(this.username); // Output: undefined
  }
};
user3.welcomemsg();


// ✅ WHEN IT WORKS PERFECTLY: Inner Callbacks (The superpower of Arrow Funcs)
// Use arrow functions inside regular methods to preserve the parent object context.
const user4 = {
  username: "Sam",
  tags: ["admin", "developer"],
  
  showTags() {
    // 1. Regular method: 'this' correctly points to 'user2'
    console.log(`Getting tags for ${this.username}...`); 
    
    // 2. Arrow function callback inherits 'this' directly from showTags()
    this.tags.forEach((tag) => {
      console.log(`${this.username} has access to: ${tag}`); // Works flawlessly!
    });
  }
};
user4.showTags();
// Output: "Sam has access to: admin", "Sam has access to: developer"

const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,8))

//++++++ implicit return++++++++++
//Implicit return func ddddddddddddont tt t needwritreurn keyword in {} , only write the body in the sME LINE AFTER ARROW
const addthree=(num1,num2,num3)=>num1+num2+num3
console.log(addthree(3,4,2))

//we can wrap the things in () this method is highly used in react.js
const addfour=(num1,num2,num3,num4)=>(num1+num2+num3+num4)
console.log(addfour(3,4,2,4))
//this is useful in using object {}
const user5=()=>({username:"sagar"})
console.log(user5.username)