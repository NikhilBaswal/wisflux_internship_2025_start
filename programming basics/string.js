//string is a character array
a="Nikhil Baswal"
console.log(a)
console.log(a[4])  // character at 4 index

 // using for loop
for(let i=0;i<a.length;i++)
    console.log(a[i])

// using forOf loop
for (const element of a) {
    console.log(element)
}

// using forEach loop ( forEach loop does not work for strings )
// a.forEach(element => {
//     console.log(element)
// });

// built it methods

console.log(a.toUpperCase()) // toUppercase and lower case dont change the original string
console.log(a.toLowerCase())
console.log(a)   // it will not be in upper or lower case . it will be as it it befor

// we can do changes in this way (new string)
s=a.toUpperCase()
console.log(a,s)

k="  hello dear  "
console.log(k)
console.log(k.length)
n=k.trim()    // it will remove the extra space from start and at end
console.log(n)
console.log(n.length)

console.log(k.indexOf('l'))
console.log(n.indexOf('l'))

console.log(k[3])           //element at 3 index 
console.log(k.charAt(3))   // element at 3 index

n="Hii I am Nikhil"
console.log(n.slice(4))  // substring from  4 index to end 
console.log(n.slice(4,12))  // substring from  4 index to 10 index
console.log(n)    // does not affect the actual string 

ar= n.split() // this function will convert string into an array
console.log(ar)

// we can do this in this way also
console.log(n.split(' '))

n="Nikhil"
m=19
//if we want to use " sign inside string then we use ` ` sign rather than " "
console.log(`hel"lo`)
//if we want to insert changable or dynamic value than use ${} inside the ` `
console.log(`my name is ${n} and age is ${m}`)