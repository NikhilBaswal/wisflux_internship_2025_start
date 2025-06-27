   document.querySelector("h1").style.color = "blue";

setTimeout(function(){
 
   
    let x= document .querySelector("h2");
    x.style.background= "red"
    console.log("hello",x)

},2*1000)


let a=document.getElementById("e1")

let b=document.getElementById("e2")
let c=document.getElementById("e3")
a.addEventListener("mouseenter",function(){
    a.style.color="black"
    a.style.background="orange"
})
a.addEventListener("mouseleave",function(){
    a.style.color="blue"
    a.style.background="white"
})
b.addEventListener("click",function(){
    
   a.style.color="green"
    a.style.background="gray"
     b.style.color="yellow"
    b.style.background="brown"
    
})
b.addEventListener("mouseleave",function(){
     a.style.color="blue"
    a.style.background="white"
     b.style.color="black"
    b.style.background="red"
    
})
c.addEventListener("click",function(){
     c.style.color="white"
    c.style.background="blue"
})
c.addEventListener("mouseleave",function(){
     c.style.color="black"
    c.style.background="white"
})

 // multiple html element through js

let m=document.getElementById("a")
var s = ""
for(let  i=0;i<5;i++){
    s += "<h4>have a good day</h4>"
}
m.innerHTML=s

let n=document.getElementById("i")
let v = ""
for(let  i=0;i<5;i++){
    v += "<h4>have a good day</h4>"
}
m.innerHTML=v