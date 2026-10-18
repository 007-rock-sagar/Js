const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )
//using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )
//3.using any other func
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//here we just gave the reference of func  i.e. without ()
//4. the foreach can extract many things from array as items,indexes,and whole array also
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
//
//5. Extracting objects from array containing objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageName.val);
} )
