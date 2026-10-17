// const marvel_heros=["thor","ironman","spiderman"]
// const dc_heros=["superman","flash","batman"]

// //merge them
// marvel_heros.push(dc_heros)
// // console.log(marvel_heros)
// // console.log(marvel_heros[3][2])


// //concat
// let all_heros=marvel_heros.concat(dc_heros)//concat return new array doesnot modify the originall array
// // console.log(all_heros)

// //use spread
// const all_new_heros=[...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

//use flat
const another_heros=[1,2,3,[4,8,[5,6,5,[44,55,55]],[58,6]]]
const all_real_heros=another_heros.flat(Infinity)//infinity tellls all the depth is scrapped

console.log(all_real_heros)
const all_real_heros2=another_heros.flat(2)//scrap upto depth 2
console.log(all_real_heros2)

//get array from other datatype
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
//from object
console.log(Array.from({name:"Hitesh"}))//return empty array as it asks for whether array of key or value

let sc1=90
let sc2=80
let sc3=190
console.log(Array.of(sc1,sc2,sc3))