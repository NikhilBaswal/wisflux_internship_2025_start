let a=document.getElementById("s1")
a.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256)
    let r2 = Math.floor(Math.random()*256)
    let r3 = Math.floor(Math.random()*256)
    a.style.background=`rgb(${r1},${r2},${r3})`
})
a.addEventListener("mouseleave",function(){
    a.style.background="rgb(91, 216, 216)"
})

let b=document.getElementById("s2")

b.addEventListener("mouseenter",function(){
  let p =Math.floor( Math.random()*10)
   b.innerHTML=`<h2>${p}</h2>`
})

let c=document.getElementById("s3")
let clr="purple"
c.addEventListener("mouseenter",function(){
    if(clr=="purple"){
        c.style.background = clr;
        clr="green";
    }
    else if(clr=="green"){
        c.style.background=clr;
        clr= "yellow";
    }
    else {
        c.style.background=clr;
        clr= "purple";
    }
})
c.addEventListener("mouseleave",function(){
    c.style.background="rgb(91, 216, 216)"
})


let d=document.getElementById("s4")
d.addEventListener("mouseenter",function(){
    let n1 = Math.floor(Math.random()*256)
    let n2 = Math.floor(Math.random()*256)
    let n3 = Math.floor(Math.random()*256)
    let n4 = Math.floor(Math.random()*256)
    let n5 = Math.floor(Math.random()*256)
    let n6 = Math.floor(Math.random()*256)
    let n7 = Math.floor(Math.random()*256)
    let n8 = Math.floor(Math.random()*256)
    let n9 = Math.floor(Math.random()*256)
    a.style.background=`rgb(${n1},${n1},${n3})`
    b.style.background=`rgb(${n4},${n5},${n6})`
    c.style.background=`rgb(${n7},${n8},${n9})`
})
d.addEventListener("mouseleave",function(){
    a.style.background="rgb(91, 216, 216)"
    b.style.background="rgb(91, 216, 216)"
    c.style.background="rgb(91, 216, 216)"

})