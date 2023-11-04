/**
 * @class Model
 *
 * Manages the data of the application.
 */

class expense {
    constructor(transactionsText, amount) {
      this.id = this.generateID();
      this.text = this.transactionsText;
      this.amount = this.amount;
    }
  
    generateID() {
      return Math.floor(Math.random() * 100000000);
    }
}