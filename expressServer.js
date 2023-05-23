// Dependencies
const express = require('express');

const app = express()



app.use(express.json())


app.get('/',(req, res )=>{

  res.send(" it's from home page ")

})

app.post('/',(req,res)=>{
  console.log(req.body)
  res.send()
})




app.listen(4000, ()=>{
  console.log( 'app is listening....')
})