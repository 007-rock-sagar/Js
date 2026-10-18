// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

/*### 📝 Study Notes: JavaScript Objects vs. Maps
Quick structural and operational breakdown of key-value pair mechanics.

---

#### 1. Core Differences Breakdown

* **Key Data Types Allowed:**
  * **Objects:** Key entries are strictly limited to **Strings** or **Symbols**. Any other type (like numbers or functions) gets stringified automatically.
  * **Maps:** Keys can be **any arbitrary data type**, including Objects, Functions, and Primitives. They enforce strict type matching (e.g., number `123` is completely distinct from string `"123"`).

* **Element Ordering:**
  * **Objects:** Do not guarantee reliable element sequencing; mixed keys can lead to erratic loop iterations.
  * **Maps:** Guarantee **strict insertion order**, retrieving items chronologically in the exact order they were saved.

* **Default Prototypes:**
  * **Objects:** Inherit base structural properties from `Object.prototype`, which risk naming collisions with user-supplied inputs.
  * **Maps:** Pure data storage blocks containing **zero default keys** out of the box.

* **Size and Performance:**
  * **Objects:** Sizing requires manual overhead calculation via `Object.keys(obj).length`.
  * **Maps:** Expose an instantaneous lookups via the built-in `.size` property.

---

#### 2. Structural Quick Matrix

| Feature | Object `{}` | `Map` Instance |
| :--- | :--- | :--- |
| **Supported Key Types** | Strings and Symbols only | Any value (Objects, Functions, Primitives) |
| **Chronological Order** | Not guaranteed | Strictly preserved by insertion order |
| **Direct Loop Iteration** | Requires `Object.keys()` / `for...in` | Directly iterable with native `for...of` |
| **Total Size Retrieval** | Manual overhead computation | Immediate lookups via `.size` property |
| **Primary Use Case** | Structuring static records & JSON | High-frequency data manipulation |
*/
