//1.Q What if we want to store the items returned by foreach,we dont need to store but either check any condn or store them.what to do ?
//ans-->we can use for each also but by running and stroing by condn
//or we can use filter

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);//undefined
//so for each (the callback array processor doesnot return anything)

//-->>Filter stores the items , as array ,so use filter instead of foreach 
//-->filter also uses callback functions
//it uses a condn to filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newnums=myNums.filter((num)=>(num>4))
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

//2. store in array using for each
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
/*### 📝 Study Notes: Array Filtering — `.filter()` vs. Manual `.forEach()`
An exam-ready reference tracking the return behavior of array methods, conditional processing, and real-world database-style filtering.

---

#### 1. The Core Limitation of `.forEach()`
* **The Return Trap:** The `.forEach()` method is designed purely for side-effects. It explicitly **does not return anything**.
* Even if you explicitly type `return item` inside a `.forEach()` callback, the overall variable assignment will always evaluate to **`undefined`**.
```javascript
const values = coding.forEach((item) => {
    return item; 
});
console.log(values); // Output: undefined
```

---

#### 2. Solution A: Native Filtering via `.filter()`
* **Definition:** A higher-order array method that evaluates every element against a specific true/false condition.
* **Return Value:** It automatically returns a **brand new array** containing only the elements that passed the conditional test (`true`). It does not mutate the original array.
* **Callback Rules:** Like other array methods, it accepts a callback function.

##### ⚠️ The Arrow Function Scope Pitfall (Crucial)
* **Implicit Return:** If you do not use curly braces, the evaluation is returned automatically.
  ```javascript
  const newnums = myNums.filter((num) => num > 4); // Parentheses or no braces = Auto Return
  ```
* **Explicit Return:** If you open curly braces `{ }`, you **MUST** write the `return` keyword explicitly. Leaving it out returns an empty array `[]`.
  ```javascript
  const newNums = myNums.filter((num) => {
      return num > 4; // 'return' keyword is mandatory here!
  });
  ```

---

#### 3. Solution B: Manual Accumulation using `.forEach()`
If you choose to store values conditionally using `.forEach()`, you must manually initialize an empty tracking array externally and push elements into it whenever your condition hits `true`.
```javascript
const newNums = [];

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num); // Manual state accumulation
    }
});
```

---

#### 4. Real-World Application: Complex Object Querying
The `.filter()` method is the standard approach for querying arrays of objects (like records from a database API) using logical operators (`===`, `>=`, `&&`).

```javascript
// Query 1: Direct structural matching
let userBooks = books.filter((bk) => bk.genre === 'History');

// Query 2: Multi-conditional filtering inside an explicit block
userBooks = books.filter((bk) => { 
    return bk.publish >= 1995 && bk.genre === "History";
});
```

---

#### 5. Quick Comparison Summary

| Operational Dimension | `.forEach()` Method | `.filter()` Method |
| :--- | :--- | :--- |
| **Primary Intent** | General execution loops / Side-effects | Creating a subset based on a condition |
| **Return Profile** | Always returns `undefined` | Returns a **New Array** with matching items |
| **State Mutation** | Requires an external array to save data | Handles array creation implicitly |
| **Callback Logic** | Executes procedural logic per element | Requires a block that evaluates to `true`/`false` |
*/
