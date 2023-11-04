/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class TodoController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    // Per fer ex2 l'apartat (a), he posat alguns console.log per veure i aclarir què és cada cosa
    console.log(view);
    console.log(service);
    console.log(this.handleAddTodo);
    this.view.bindAddTodo(this.service.addTodo);
    // La mateixa posat dins d'un console.log per visualitzar el famós undefined
    console.log(this.view.bindAddTodo(this.service.addTodo));
    console.log(this.view.bindAddTodo);
    console.log(this.service.addTodo);

    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }

  onTodoListChanged = todos => {
    console.log(todos);
    this.view.displayTodos(todos);
  };

  handleAddTodo = todoText => {
    this.service.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.service.editTodo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = id => {
    this.service.toggleTodo(id);
  };
}
