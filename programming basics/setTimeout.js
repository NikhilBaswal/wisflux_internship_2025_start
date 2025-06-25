function hii(){
    console.log("i am AI engineer")
}
function bye(){
    console.log("i am hardworking")
}
hii()      // both hii and bye function will execute together
bye()

setTimeout(hii,2*1000)      // hii function will execute after 2 second
setTimeout(bye,1*1000)


// // code to print 1 to 10 no with 1 sec delay in each


for (let i=1;i<=10;i++){
    setTimeout(function (){console.log(i)},i*1000)
    
}
  


// // also in this way 
// for (let i=1;i<=10;i++){
//     function num(){
//     console.log(i)
// }

//     setTimeout(num,i*1000)
    
// }

