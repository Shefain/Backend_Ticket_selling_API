// we have to install dotenv and require here
const http = require('http');
const app = require('./app/app');


const server = http.createServer(app)

const PORT = process.env.PORT || 8000; // not getting process.env.PORT


server.listen(PORT,()=>{
  console.log(` server listening on port ${PORT}`)
})