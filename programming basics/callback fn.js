//callback function is a function that will be passed inside a function as an argument
function product(x,y,z){
    return x*y*z
}
function sumOfProduct(a,b){
    return a+b
}
console.log(sumOfProduct(product(1,2,3,),product(4,5,6,)))


//also in this way
function sum(p,q,r){
    return p+q+r
}
function fun(m,n){
    k=m(3,2,4)
    console.log(k+n)
}
fun( sum,7)