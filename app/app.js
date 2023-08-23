const express = require('express');
const {notFoundHandaler,errorHandaler} = require('./error')


const app = express();

app.use(require('./middleware'))
app.use(require('./router'))



app.use(notFoundHandaler);
app.use(errorHandaler);


module.exports = app;



// we need make app separate for testing and if you want to run in different protocol http/https