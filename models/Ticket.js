class Ticket{
  /**
   * 
   * @param {string} username 
   * @param {number} price 
   */
  constructor(username,price){
    this.id = Math.floor(Math.random()*99999999)
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.UpdatedAt = new Date();

  }
  
}

module.exports = Ticket;