// map function is used when we want to remake a new array with some changes by the existing array

// without using map
 krr=[3,5,6,7,6]
 mrr=[]
 console.log(krr)
 for(let i=0;i<krr.length;i++){
    mrr[i]=krr[i]+3
    // mrr.push(krr[i]+3)
 }
 console.log(mrr)

 // by using map function
 arr=[3,2,5,5,7,3,6]
 console.log(arr)
function add(x){
    return x+3
}
brr=arr.map(add)
console.log(brr)
 
// also in this way
 arr=[2,7,9,0,3,6]
 console.log(arr)

brr=arr.map(function (x){
    return x+3
})
console.log(brr)
 
// also in this way
brr=arr.map(x=>{   // here => is work as function key word. its just another way
    return x+3
})
console.log(brr)

 // also in this way
 brr=arr.map(x=>x+3)
console.log(brr)