/**
 * @class Service
 *
 * Manages the data of the application.
 */
class expenseService {
    constructor() {
        this.transactions = (JSON.parse(localStorage.getItem("transactions")) || []);
        // const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));
    }

    bindTransactionListChanged(callback) {
        this.onTransactionListChanged = callback;
    }
    _commit(transactions) {
        localStorage.setItem("transactions", JSON.stringify(transactions));
        
    }

    addTransaction(transactionsText) {
        if (text[1].value == '' || amount[1].value == '') {
          alert('Please add a text and amount');
        } else {
            // const transaction = new expense(transactionsText, +amount[1].value);
            const transaction = {
                id: this.generateID(),
                text: text[1].value,
                amount: +amount[1].value
            };
            this.transactions.push(transaction);
            this._commit(this.transactions);
            this.addTransactionDOM(transaction);
            this.updateValues();
            this.init();
            text.value = '';
            amount.value = '';  
        }
    }
    addTransactionDOM(transaction) {
        // Get sign
        const sign = transaction.amount < 0 ? '-' : '+';
        const item = document.createElement('li');
        item.contentEditable = true;
        item.id = transaction.id;

        // Add class based on value
        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
 
        item.innerHTML = `${transaction.text} 
        <span contentEditable = "true" class="editable">${sign}${Math.abs(transaction.amount)}</span> 
        <button class="delete-btn" 
        onclick="removeTransaction(${transaction.id})" 
        id="${transaction.id}">x</button>`;
      
        list.appendChild(item);
    }
    updateValues() {
        const amounts = this.transactions.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
        const income = amounts
          .filter(item => item > 0)
          .reduce((acc, item) => (acc += item), 0)
          .toFixed(2);
      
        const transaction = (
          amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
          -1
        ).toFixed(2);
      
        balance.innerText = `$${total}`;
        money_plus.innerText = `$${income}`;
        money_minus.innerText = `$${transaction}`;

    }
    editTransaction(id, updatedText, upadtedAmount) {
        var arr2 = JSON.parse(localStorage.getItem("transactions"));
        for (var i =0; i< arr2.length; i++) {
            var transaction = arr2[i];
            if (this.transactions[i].id == id) {
                var upadtedAmount2 = parseInt(upadtedAmount);
                arr2[i].text = updatedText;
                arr2[i].amount = upadtedAmount2;
            }
        };
        this.transactions = arr2;

        this._commit(this.transactions);
        this.init();
    }
    removeTransaction(id) {
        var arr = JSON.parse(localStorage.getItem("transactions"));
        for (var i =0; i< arr.length; i++) {
            var transaction = arr[i];
            if (this.transactions[i].id == id) {
                arr.splice(i, 1);
            }
        };

        this.transactions = arr;

        this._commit(this.transactions);
        this.init();
    }

    init() {
        list.innerHTML = '';
        this.transactions.forEach(this.addTransactionDOM);
        this.updateValues();
    }
    generateID() {
        return Math.floor(Math.random() * 100000000);
    }
} 