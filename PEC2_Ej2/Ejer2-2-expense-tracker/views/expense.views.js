/**
 * @class View
 *
 * Visual representation of the model.
 */
class expenseView {
    constructor() {
        this.app = this.getElement("#root");        
        this.title = this.createElement("h2");
        this.title.textContent = "Expense Tracker";
        this.title2 = this.createElement("h4");
        this.title2.textContent = "Your Balance";
        this.h1 = this.createElement("h1");
        this.h1.id = "balance";
        this.h1.textContent = "$0.00";

        this.div = this.createElement("div", "inc-exp-container");
            this.div2 = this.createElement("div");
            this.inc = this.createElement("h4");
            this.inc.textContent = "Income";
            this.moneyplus = this.createElement("p");
            this.moneyplus.className = "money plus";
            this.moneyplus.id = "money_plus";
            this.moneyplus.textContent = "+$0.00";
        this.div2.append(this.inc, this.moneyplus);
            this.div3 = this.createElement("div");
            this.exp = this.createElement("h4");
            this.exp.textContent = "Expense";
            this.moneyminus = this.createElement("p");
            this.moneyminus.className = "money minus";
            this.moneyminus.id = "money_minus";
            this.moneyminus.textContent = "-$0.00";
        this.div3.append(this.exp, this.moneyminus);
        
        this.div.append(this.div2, this.div3); 

        this.title3 = this.createElement("h3");
        this.title3.textContent = "History";
        this.expenseList = this.createElement("ul", "list");
        this.expenseList.id = "list";

        this.title4 = this.createElement("h3");
        this.title4.textContent = "Add new transaction";
        this.form = this.createElement("form");
        this.form.id = "form";
        this.divform = this.createElement("div", "form-control");
            this.label = this.createElement("label");
            this.label.id = "text";
            this.label.textContent = "Text";
            this.input = this.createElement("input");
            this.input.type = "text";
            this.input.placeholder = "Enter text...";
            this.input.id = "text";
        this.divform.append(this.label, this.input);
        this.divform2 = this.createElement("div", "form-control");
            this.label2 = this.createElement("label");
            this.label2.id = "amount";
            this.label2.textContent = "Amount (negative - expense, positive - income)";
            this.input2 = this.createElement("input");
            this.input2.type = "number";
            this.input2.placeholder = "Enter amount...";
            this.input2.id = "amount";
        this.divform2.append(this.label2, this.input2);
        this.submitButton = this.createElement("button", "btn");
        this.submitButton.textContent = "Add transaction";

        this.form.append(this.divform, this.divform2, this.submitButton);

        this.app.append(this.title, this.title2, this.h1, this.div, this.title3,
            this.expenseList, this.title4, this.form);

        this._temporaryTransactionsText = "";
    }

    get _transactionsText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = "";
    }
    _resetAmount(){
        this.input2.value = "";
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    
    displayTransaction(transactions) {
        while (this.expenseList.firstChild) {
            this.expenseList.removeChild(this.expenseList.firstChild);
        }
        if (transactions.length === 0) {
            const p = this.createElement("p");
            p.textContent = "Nothing in the history";
            this.expenseList.append(p);
        } else {
            
        // Create nodes
            transactions.forEach(transactions => {
                const li = this.createElement("li");
                li.className = transactions.amount < 0 ? 'minus' : 'plus';
                li.textContent = transactions.text;

                const span = this.createElement("span");
                const sign = transactions.amount < 0 ? '' : '+';
                span.innerHTML = `${sign} ${transactions.amount}`;

                const deleteButton = this.createElement("button", "delete-btn");
                deleteButton.setAttribute("onclick", "removeTransaction("+transactions.id+")");
                deleteButton.id = transactions.id;
                deleteButton.textContent = "x";
                li.append(span, deleteButton);

                // Append nodes
                this.expenseList.append(li);
            });
        }
        
        // Debugging
        console.log(transactions);
    }

    bindAddTransaction(handler) {
        this.form.addEventListener("submit", event => {
          event.preventDefault();
          if (this._transactionsText) {
            handler(this._transactionsText);
            this._resetInput();
            this._resetAmount();
          }
        });
    }
    bindDeleteTransaction(handler) {
        this.expenseList.addEventListener("click", event => {
          if (event.target.className === "delete-btn") {
            const id = event.target.id;
            handler(id);
          }
        });
    }
    bindEditTransaction(handler) {
        this.expenseList.addEventListener("focusout", event => {
          if (this._temporaryExpenseText) {
            const id = event.target.parentElement.id;
            handler(id, this._temporaryExpenseText);
            this._temporaryExpenseText = "";
          }
        });
    }
    bindToggleTransaction(handler) {
        this.expenseList.addEventListener("change", event => {
          if (event.target.type === "checkbox") {
            const id = event.target.parentElement.id;
            handler(id);
          }
        });
    }
}