const express = require('express');
const publicroute = require('./public')

const app = express();

app.use('/public',publicroute)




app.listen(4000, ()=>{
  console.log(' its litening____')
})