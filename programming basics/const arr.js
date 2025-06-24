 /*note :-If an array or variable is already declared using const, 
          then trying to redeclare it later using var or let will cause an error.
          Similarly, if an array or variable is already declared using var or let,
          then trying to redeclare it later using const will also cause an error.*/
        
          
/* we can do change(push,pop,unshift,shift) in const arr but we cant redeclare it*/

//const arr
 const brr=[4,5,6,7,8]
console.log(brr) 
 
// brr= 4              //it will give error
// console.log(arr)



let arr=[1,3,5,7,9]
console.log(arr)

arr=7                // no error
console.log(arr)

//interesting thing in js is that we can store multiple type of data in a array
 
arr=["Nikhil",19,true,99.99, [2,3,4], [5,6,7,8]]
console.log(arr)