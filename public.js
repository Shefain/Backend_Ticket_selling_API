const express = require('express');

const publicroute = express.Router();


publicroute
  .route('/user')
  .all((req,res,next)=>{
   console.log(' hello ');
   next()
  })
  .get((req,res)=>{
    res.send(' hi')

  })
  .post((req,res)=>{
    res.send('put')
  })

module.exports = publicroute;