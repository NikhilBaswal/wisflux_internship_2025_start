Nrr=[2,5,7,8,]
console.log(Nrr)
for(let i=0;i<Nrr.length;i++){
    Nrr[i] *= 2
    console.log(Nrr[i])
}
console.log(Nrr) // in for loop we can do changes and it will be applied on arr


//forOf  loop
let arr=[3,4,8,9,]
console.log(arr)
for (const ele of arr) {
    // ele *= 2 // it will give error because of const keyword we cant change the element of arr
    console.log(ele)
}


let brr=[1,3,5,6]
console.log(brr)
for (let ele of brr) {
        ele *= 2  // it will not give error because of let keyword we can change the element of arr
        console.log(ele)
}
console.log(brr) // in forOf loop we can do changes and it will not be applied on arr

//forEach loop

krr=[3,5,9,0,4,5,]
krr.forEach(ele => {
      console.log(ele)
});


krr=[0,4,5,3,6]
console.log(krr)
krr.forEach((ele,i) => {       // in this we can add index with element
    ele *= 2
      console.log(ele,i) // here changes are occure but not applied on array
});
console.log(krr) // no changes in array