console.log(Math.abs(-3)) // for convert a -ve integer into +ve 
console.log(Math.sqrt( 4 ))  
console.log(Math.cbrt(8))
console.log(Math.min(3,4,-2,-6,4,5,3,-9,0))
console.log(Math.max(3,4,5,3,-9,0))
  
console.log(Math.log(10))
console.log(Math.log10(10))
console.log(Math.log2(10))
//console.log(Math.log3(3))  // it will show error because log3 is not built in

console.log(Math.floor(5.4)) // it will give the floor value 5
console.log(Math.floor(-3.5)) //floor value is -4
console.log(Math.ceil(5.3))  // it will give the ceil value 6
console.log(Math.ceil(-5.3)) // ceil value is -5

console.log(Math.random())   // this function will give random value between 0 and 1(excluded). And don't need any argument
 
// code to generate a number bw a and b (included/excluded)
let num= Math.floor(Math.random()*10)    // will give random no bw 0 and 9( included)
console.log(num)
let p= Math.floor(Math.random()*9)    // will give random no bw 0 and 9( excluded)
console.log(p)

let q = Math.floor(Math.random()*11)    // will give random no bw 0 and 10( included)
console.log(q)
let a = Math.floor(Math.random()*10)    // will give random no bw 0 and 10( excluded)
console.log(a)

let b= Math.floor((Math.random()*(-11)) +(Math.random()*(11)))   // will give random no bw -10 and 10 (included)
console.log(b)
let c= Math.floor((Math.random()*(-10)) +(Math.random()*(10)))   // will give random no bw  -10 and 10 (excluded)
console.log(c)

// random function in if else statement 
if(Math.random()<0.4)
    console.log("Nikhil")
else
    console.log("Baswal")