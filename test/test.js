
const myDB = require('../db/db');
  // myDB.createTicket('user 1', 10);
// myDB.createTicket('user 2', 10);
// myDB.createTicket('user 4', 10);
// myDB.createTicket('user 4', 10);
// myDB.deletByUsername('user 4');
// const body = {
  //   "username":"mahi",
  //   "price":"10"
  // }
  //  myDB.updateById(29071183, body)
  // const bulk = myDB.createBulkTickets('test', 10,1);
  // console.log('Bulk', bulk);
 
  const tickets = myDB.find();
  console.log('All Tickets', tickets);
  const winners = myDB.draw(2);
   console.log('Winners', winners);