const express = require('express')
const app = express()
const port = 3000
app.set("view engine","ejs");
app.use(express.static('./public'));

app.use(function(req,res,next){
    console.log("middleware 1 working");
    next();
})
app.use(function(req,res,next){
    console.log("middleware 2 working");
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/xyz', (req, res) => {
  res.send('this is for the fun !')
})

//routing parameter or dynamic routing
app.get('/profile/:username', (req, res) => {
  res.send(`Hello, ${req.params.username} this side!`)
})

app.get('/abc',(req,res)=>{
  // res.send(" angdo bangdo")             //   res.send and res.render ek saath nhi chal rahe hai, koi ek hi chalega
  res.render("index", {age:13});

})

app.get('/second',(req,res)=>{
  // res.send(" angdo bangdo")             //   res.send and res.render ek saath nhi chal rahe hai, koi ek hi chalega
  res.render("second",{age:"thirteen"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
