/*### 📝 Study Notes: The `.reduce()` Array Accumulator Method
An exam-ready reference tracking the internal state mechanics, parameter structures, and initialization rules of the JavaScript reducer pipeline.

---

#### 1. Core Definition & Architectural Role
* **Definition:** The `.reduce()` method executes a user-supplied **"reducer" callback function** sequentially across every element of an array.
* **The Core Mechanism:** It passes the calculated return value from the *preceding* element directly into the calculation of the *current* element.
* **Return Value:** It compresses the entire collection down, returning a **single consolidated value** (e.g., a number, string, object, or accumulated array).

---

#### 2. The Complete Parameter Signature
The method structure accepts two primary arguments: **The Callback Function** and the **Optional Initial Value**.

```javascript
const finalResult = array.reduce((accumulator, currentValue, currentIndex, originalArray) => {
    return accumulator + currentValue;
}, initialValue);
```

##### 🔍 Inside the Callback Arguments:
1. **`accumulator`:** Stores the running tally or the collective return value from the immediate previous callback execution.
2. **`currentValue`:** The array item currently being actively evaluated.
3. **`currentIndex`:** The position index slot of the active item.
4. **`originalArray`:** A direct reference pointer back to the source array.

---

#### 3. Critical Exam Rule: Initial Value Mechanics
The execution flow changes completely based on whether you supply an `initialValue` argument at the end of the method:

##### Scenario A: An `initialValue` IS Supplied (Highly Recommended)
* **First Iteration Starting Index:** Index `0`.
* **Accumulator Starting State:** The `accumulator` begins exactly as your defined `initialValue`.
* **Current Value Starting State:** The `currentValue` starts as the first item in the array (`array[0]`).

##### Scenario B: NO `initialValue` Is Supplied
* **First Iteration Starting Index:** Index `1` (Skips index `0`).
* **Accumulator Starting State:** The `accumulator` implicitly steals the element located at index `0` as its baseline seed.
* **Current Value Starting State:** The `currentValue` starts directly at index `1`.
* *⚠️ Fatal Trap Note:* Running `.reduce()` without an initial value on an **empty array** will instantly throw a structural `TypeError`.

---

#### 4. Practical Implementation Trace

```javascript
const cartPrices =;

// Trace: 
// Iteration 1: accumulator = 0,  currentValue = 10 -> returns 10
// Iteration 2: accumulator = 10, currentValue = 20 -> returns 30
// Iteration 3: accumulator = 30, currentValue = 30 -> returns 60
const totalBill = cartPrices.reduce((acc, curr) => acc + curr, 0);

console.log(totalBill); // Output: 60
```

---

#### 5. Quick Reference Execution Matrix

| Execution Setup | Starting Index | Initial Accumulator Value | Risk on Empty Array `[]` |
| :--- | :--- | :--- | :--- |
| **With `initialValue` (e.g., `0`)** | Index `0` | Matches `initialValue` exactly | Safe (Returns the initial value) |
| **Without `initialValue`** | Index `1` | Automatically takes `array[0]` | ❌ Crash Error (`TypeError`) |
*/

const nums=[12,13,14,15]
initial_val=1;
const newnums=nums.reduce(function(accumulator,curr_val){
    console.log(`Acc is ${accumulator} and curr is ${curr_val} `)
    return accumulator+curr_val
},initial_val )
console.log(newnums)

const shopcart=[
    {Course:"js",
     price:233   
    },
     {Course:"python",
     price:533   
    },
     {Course:"java",
     price:3233   
    },
     {Course:"data sci",
     price:1133   
    },
     {Course:"web dev",
     price:999   
    }

]

const total=shopcart.reduce((acc,items)=>(acc+items.price),0)
console.log(total)

// ==========================================================
// ADVANCED REDUCE: GROUPING AN ARRAY OF OBJECTS BY PROPERTY
// ==========================================================

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992 },
    { title: 'Book Three', genre: 'History', publish: 1999 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989 },
    { title: 'Book Five', genre: 'Science', publish: 2009 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987 },
    { title: 'Book Seven', genre: 'History', publish: 1986 }
];
 
const segbook=books.reduce((acc,item)=>{
    const key=item.genre
    if(!acc[key])acc[key]=[];

    acc[key].push(item);
    return acc;
},{});// Initial Value is an empty object {} to build our buckets
console.log(segbook)
