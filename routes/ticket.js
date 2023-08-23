const router = require('express').Router()
const myDB = require('../db/db');

router.route('/ticket/id/:ticketid')
  .get((req,_res)=>{ myDB.findByID(req.query.ticketid)})
  .patch(()=>{myDB.updateById()})
  .delete(()=>{myDB.deleteById()})


router.route('/ticket/u/:username')

module.exports = router;