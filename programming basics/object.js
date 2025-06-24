// object is kind of like map/dictionary where we have "key-value" pairs
let x={
    name: "Nikhil",
    age: 19,
    percentage: 92.93,
   "is Adult" : true
}
console.log(x)
console.log(x.name,x.age)
console.log(x["percentage"])
console.log(x["is Adult"])

for (const key in x) {
    {
        console.log(x[key]);
        
    }
}