/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class expenseController {
    constructor(service, view) {
        this.service = service;
        this.view = view;

        // Explicit this binding
        this.service.bindTransactionListChanged(this.onTransactionListChanged);
        this.view.bindAddTransaction(this.handleAddTransaction);
        this.view.bindEditTransaction(this.handleEditTransaction);
        this.view.bindDeleteTransaction(this.handleDeleteTransaction);
        this.view.bindToggleTransaction(this.handleToggleTransaction);
    
        // Display initial transactions
        this.onTransactionListChanged(this.service.transactions);
        // Display initial balance
        this.onBalance(this.service.transactions);
    }
    
    onBalance = transactions => {
        this.service.updateValues();
    };

    onTransactionListChanged = transactions => {
        this.view.displayTransaction(transactions);
    };

    handleAddTransaction = transactionsText => {
        this.service.addTransaction(transactionsText);
    };

    handleEditTransaction = (id, transactionsText) => {
        this.service.editTransaction(id, transactionsText);
    };

    handleDeleteTransaction = id => {
        this.service.removeTransaction(id);
    };

    handleToggleTransaction = id => {
        this.service.toggleTransaction(id);
    };
}