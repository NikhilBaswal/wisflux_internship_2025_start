// indexing from 0 to n-1
const arr=[1,2,3,4,5,6]
console.log(arr)
//length function
n=arr.length;
console.log("length of arr is ", n)

//traversing of arr
console.log("elements of arr ")
for( let i=0;i<n;i++)
    console.log(arr[i])
//for traversing n index element
console.log("2 indexing element is", arr[2])

//push an element at last
arr.push(7)
console.log(arr)

// pop an element at last
arr.pop()
console.log(arr)

// push an element at first
arr.unshift(0)
console.log(arr)

// pop an element at first
arr.shift()
console.log(arr)
                   
// rememeber that type of arr will be object
console.log(typeof (arr))