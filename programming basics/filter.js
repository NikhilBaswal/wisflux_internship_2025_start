// filter is used to filter out some specific element from an array
let arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)
function fun(ele){
    if(ele%2==0)
        return true    // means select the satisfied element in array
    else 
    return false       // means discard the unsatisfied element in arrayd
}
brr=arr.filter(fun)
console.log("even element",brr)

//also in this way
brr=arr.filter(function (ele){
    if(ele%2==0)
        return true    // means select the satisfied element in array
    else 
    return false       // means discard the unsatisfied element in arrayd
})
console.log("even element",brr)
 
//also in this way
brr=arr.filter( ele=>{
    if(ele%2==0)
        return true    // means select the satisfied element in array
    else 
    return false       // means discard the unsatisfied element in arrayd
})
console.log("even element",brr)

// more examples
brr=arr.filter( ele=>{return (ele<5)})
console.log(" element < 5",brr)

