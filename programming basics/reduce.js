//reduce 
let a=[7,333,25,8,34,56,34,22,5566,22,4,77,98]
console.log(a)
let b= a.reduce(function(a,b){
    return a+b
})
console.log("sum of element of arr " ,b)

//sorting of arr ascending
a = a.sort((x,y)=> x-y)
console.log(" ascending sorted array ",a)

//sorting of arr ascending
a = a.sort((x,y)=> y-x)
console.log("descending sorted array ",a)