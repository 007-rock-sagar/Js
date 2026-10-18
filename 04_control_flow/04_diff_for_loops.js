const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
/*### 📝 Study Notes: JavaScript Loops & Data Structure Mapping
Comprehensive guide for choosing the right iteration method based on data architecture.

---

#### 1. Core Loops Breakdowns

* **`for...of` (The Value Consumer)**
  * **Best For:** Arrays, Maps, Sets, Strings, NodeLists.
  * **Rule:** Works ONLY on **iterable objects** (implements `[Symbol.iterator]`). Extracts values directly.
  * **Trap:** Throws `TypeError` if used on plain objects `{}`.

* **`for...in` (The Key Inspector)**
  * **Best For:** Plain JavaScript Objects `{}`.
  * **Rule:** Iterates over all **enumerable property keys** (strings).
  * **Trap:** Avoid using on Arrays (iterates indexes as strings and risks hitting prototype properties).

* **`.forEach()` (The Callback Array Processor)**
  * **Best For:** Arrays, Maps, Sets.
  * **Rule:** Functional prototype method providing `(value, index, collection)`.
  * **Trap:** You **cannot** use `break` or `continue` to exit early.

* **Traditional `for` Loop (The Controlled Pointer)**
  * **Best For:** Complex indexing algorithms, stepping changes (e.g., `i += 2`), reversing arrays.
  * **Rule:** Full control over initialization, stepping criteria, and early termination.

---

#### 2. Master Loop Cheat Sheet Matrix

| Data Structure | Best Loop Choice | Alternative Approach | Reason |
| :--- | :--- | :--- | :--- |
| **Plain Object `{}`** | `for...in` | `for...of` with `Object.entries(obj)` | Objects are not naturally iterable. |
| **Array `[]`** | `for...of` | `.forEach()` / Traditional `for` | Clean, side-effect-free value extraction. |
| **Map `new Map()`** | `for...of` (destructured) | `map.forEach()` | Native iterables built for `[key, value]` pairs. |
| **Set `new Set()`** | `for...of` | `set.forEach()` | Extracts unique items efficiently without indices. |
| **DOM NodeList** | `for...of` | `.forEach()` | Browser node collections are true iterables. |

---

#### 3. Quick Rule of Thumb
* Use **`for...of`** for collection **values**.
* Use **`for...in`** for object **keys**.
* Use **`for`** for custom performance control or **conditional breaking**.
*/
