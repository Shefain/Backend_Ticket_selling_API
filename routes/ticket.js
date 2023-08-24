const router = require('express').Router();
const myDB = require('../db/db');




router
  .route('/i/:ticketid')
  .get((req, res) => {
    
    const ticket = myDB.findByID(req.params.ticketid);
    res.status(200).json({ message: 'successfull', ticket });
  })
  .patch((req, res) => {
    const ticketId = req.params.ticketid
    const ticket = myDB.updateById(ticketId,req.body);
    res.status(201).json({ message: ' successfull', ticket });
  })
  .delete((req, res) => {
    myDB.deleteById(req.params.ticketid);
    res.status(204).send({ message: 'successfully deleted' });
  });



router
  .route('/u/:username')
  .get((req, res) => {
    const ticket = myDB.findByUsername(req.params.username);
    res.status(201).json({ message: 'successfull', ticket });
  })
  .delete((req, res) => {
    myDB.deletByUsername(req.params.username);
    res.status(204).json({message:"successfull"});
  });



router.post('/sell', (req, res) => {
  const { username, price } = req.body;
  const ticket = myDB.createTicket(username, price);
  res.status(201).json({ message: 'successfully created', ticket });
});



router.post('/bulk', (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = myDB.createBulkTickets(username, price, quantity);
  res
    .status(201)
    .json({ message: 'Bulk ticket created successfully', tickets });
});



router.get('/draw', (req, res) => {
  const quantity = req.query.wc ?? 3;
  const tickets = myDB.draw(quantity);
  res.status(200).json({ message: 'susseccfull', tickets });
});



router.get('', (req, res) => {
  const tickets = myDB.find();
  res.status(200).json({ message: 'successfull', tickets });
});

module.exports = router;

// /tickets/t/:ticketId GET - find single ticket
// /tickets/t/:ticketId PATCH - update ticket by id
// /tickets/t/:ticketId DELETE - delete ticket by id
// /tickets/u/:username GET - find tickets for a given user
// /tickets/sell - create tickets
// /tickets/bulk - bulk sell ticket
// /tickets/draw - find winners
// /tickets/ - find all tickets
