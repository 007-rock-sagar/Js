 console.log("1">2)//did conversion to num
 console.log("1">=0)
 console.log(null>0)//f
 console.log(null==0)//f
 console.log(null>=0)//t
 //thr reason is that an equality check==and comparisons> < >= <= work differently
 //thats why null>=0 is true and null>0 is false

 console.log(undefined>0)///f
 console.log(undefined==0)//f
 console.log(undefined>=0)//f

 //Strict compare
 //=== also compare the datatypes
 console.log("2"===2)//false as datatype is not same