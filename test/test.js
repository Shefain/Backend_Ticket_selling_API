
const myDB = require('../db/db');
myDB.createTicket('user 1', 10);
myDB.createTicket('user 2', 10);
myDB.createTicket('user 3', 10);
myDB.createTicket('user 4', 10);
myDB.createTicket('user 5', 10);
const bulk = myDB.createBulkTickets('test', 10,5);
console.log('Bulk', bulk);
const tickets = myDB.find();
console.log('All Tickets', tickets);
const winners = myDB.draw(2);
console.log('Winners', winners);