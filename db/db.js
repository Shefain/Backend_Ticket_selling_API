const Ticket = require('../models/Ticket');

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   *
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  createTicket(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   *
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  createBulkTickets(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.createTicket(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   *
   * @returns all available ticktes
   */
  find() {
    return this.tickets;
  }

  /**
   *
   * @param {number} id
   * @param {string} username
   * @returns a ticket object
   */
	findById(ticketId) {
		const ticket = this.tickets.find(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.id === ticketId
		);

		return ticket;
	}
  /**
   *
   * @param {string} username
   * @returns {tickets}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter((ticket) => {
      return ticket.username === username;
    });
    return tickets;
  }

  deletByUsername(username){
    const match = [];
    this.tickets.map((ticket, index)=>{
      if (ticket.username == username){
        match.push(index)
      }
    })
    if(match.length != -0){
      return match.reverse().map((index)=> this.tickets.splice(index,1))
    }else{
      return "Couldn't delete tickets , please check your username again"
    }

  }

 /**
  * 
  * @param {number} ticketId 
  * @param {object} ticketBody 
  * @returns 
  */
	updateById(ticketId, ticketBody) {
		let ticket = this.findById(ticketId);
    console.log(ticket)
		ticket.username = ticketBody.username || ticket.username;
		ticket.price = ticketBody.price || ticket.price;
		ticket.updatedAt = new Date();
		return ticket;
	}
  /**
   *
   * @param {number} id
   * @returns delete a ticket if not then return a message of error
   */
  deleteById(id) {
    const index = this.tickets.findIndex((ticket) => ticket.id === id);
    if (index != -1) {
      this.tickets.splice(index, 1);
    } else {
      return "Couldn't delete the ticket , please check your id again";
    }
  }

  /**
   *
   * @param {number} winnerCount
   * @returns a array of object
   */
  draw(winnerCount) {
    const indexes = [];

    for (let i = 0; i < winnerCount; i++) {
      if(winnerCount< this.tickets.length){
       let index = Math.floor(Math.random() * this.tickets.length);
      while (indexes.includes(index)) {
        index = Math.floor(Math.random() * this.tickets.length);
      }

      indexes.push(index);
     }else{
      return ' plz give a valid number'
     }
    }

    const winner = indexes.map((i) => this.tickets[i]);
    return winner;
  }
}

const myDB = new MyDB();

module.exports = myDB;
