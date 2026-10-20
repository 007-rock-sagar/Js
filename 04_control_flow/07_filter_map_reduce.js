//using map 
//not the datastructure but map
//it cannot change iot in place
const mynum=[2,4,56,7,89,43]
const update=mynum.map((num)=>num+10)
console.log(update)

//Q.2.How to do it  in place 
///ans-->use foreach
mynum.forEach((num, index, arr) => {
    arr[index] = num + 10;
});
console.log(mynum); 
//3. traditioonal for loop


for (let i = 0; i < mynum.length; i++) {
    mynum[i] += 10;
}
console.log(mynum); 

///+++Chaining+++++++++
//altogether use moore than one things 
const chaining=mynum
                .map((num)=>num+10)
                .map((num)=>num*10)
                .filter((num)=>num>123)

console.log(chaining)                
/*### 📝 Study Notes: JavaScript Array Transformations — Mutating vs. Non-Mutating & Chaining
An exam-ready reference tracking modern non-mutating transformations, in-place array updates, and higher-order method chaining.

---

#### 1. Modern Array Transformation: `.map()`
* **Core Characteristic:** `.map()` is completely **non-mutating** (immutable). It does **not** alter the original array.
* **Return Value:** It automatically generates and returns a **brand new array** containing the transformed values.
* **Rule of Thumb:** You must capture the returned value in a new variable (e.g., `const update`). If you do not assign it, the transformed array is lost in memory.

```javascript
const mynum =;

// Transforms each element, returning a fresh array structure
const update = mynum.map((num) => num + 10);
console.log(update); // Output: [12, 14, 66, 17, 99, 53]
console.log(mynum);  // Output: [2, 4, 56, 7, 89, 43] (Original stays safe/unchanged)
```

---

#### 2. In-Place Array Mutation (Modifying the Original Reference)
If your goal is to directly change the values within the existing array without allocating memory for a new one, use these two techniques:

##### Technique A: Using the `.forEach()` Parameter Signature
* By leveraging the third argument `arr` (which passes the reference to the original array itself), you can overwrite elements directly using their positional index numbers.
```javascript
mynum.forEach((num, index, arr) => {
    arr[index] = num + 10; // Overwriting the original array indices directly
});
console.log(mynum); // Output: [12, 14, 66, 17, 99, 53] (Original array is permanently modified)
```

##### Technique B: Using a Traditional `for` Loop
* Direct assignment using bracket notation updates the pointer values sequentially.
```javascript
for (let i = 0; i < mynum.length; i++) {
    mynum[i] += 10; // Directly modifies memory slots
}
console.log(mynum); // Output: [22, 24, 76, 27, 109, 63] (Incremented by another 10)
```

---

#### 3. Method Chaining (Pipeline Processing)
* **Definition:** Method chaining is the technique of executing multiple higher-order methods sequentially in a single execution pipeline.
* **Under the Hood:** Because non-mutating methods like `.map()` and `.filter()` return a clean array, the next method in line immediately consumes that returned array as its input context.
* **Data Flow Execution Order:** Left-to-right / Top-to-bottom.

##### 💻 Chaining Workflow Trace:
```javascript
// Current state of mynum from previous block: [22, 24, 76, 27, 109, 63]

const chaining = mynum
    .map((num) => num + 10)   // Step 1: Adds 10 -> [32, 34, 86, 37, 119, 73]
    .map((num) => num * 10)   // Step 2: Multiplies Step 1 by 10 -> [320, 340, 860, 370, 1190, 730]
    .filter((num) => num > 123); // Step 3: Drops items <= 123 -> Keeps all items in this case

console.log(chaining); // Output: [320, 340, 860, 370, 1190, 730]
```

---

#### 4. Quick Execution Summary

| Feature / Method | Modifies Original Array? | Returns Value? | Main Purpose |
| :--- | :--- | :--- | :--- |
| **`.map()`** | ❌ No (Immutable) | ✅ Yes (A **New Array**) | Data element structural transformations |
| **`.forEach()`** | ❌ No by default (Unless you pass `arr[index]`) | ❌ No (`undefined`) | Executing side-effects / Manual array overrides |
| **Traditional `for`** | ✅ Yes (In-place manipulation) | ❌ No | High-performance manual indices overrides |
| **`.filter()`** | ❌ No (Immutable) | ✅ Yes (A **New Array**) | Selectively filtering out items matching conditions |
*/
