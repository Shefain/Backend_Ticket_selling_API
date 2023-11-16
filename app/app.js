const express = require('express');
const {notFoundHandaler,errorHandaler} = require('./error')


const app = express();

app.use(require('./middleware'))
app.use(require('./router'))



app.use(notFoundHandaler);
app.use(errorHandaler);


module.exports = app;




//We have to separate the app so that later we can do some testing & run our app into different protocols like HTTP/HTTPS
