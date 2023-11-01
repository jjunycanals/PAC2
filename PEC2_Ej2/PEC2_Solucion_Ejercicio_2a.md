Respon a la següent pregunta sobre Ejer2–1-TODO

Observa que s'han creat funcions handle al fitxer controlador (todo.controller.js), les quals són passades com a paràmetre. Això és degut al problema amb el canvi de context (this) que existeix a JavaScript. Ara mateix si no tens molt clar que està succeint, revisa què fan les “fat-arrow” d'ES6 sobre l'objecte this, i prova a canviar el codi per comprendre què està passant quan es modifica la línia següent:

this.view.bindAddTodo(this.handleAddTodo);

Per aquesta:

this.view.bindAddTodo(this.service.addTodo);

Respon, en un document text al directori de lliurament a la següent pregunta:

Per què és el valor de 'this' és undefined?

R/ El valor es undefined perquè no hi ha un valor definit.
Explicat es: this.service.addTodo en realitat és una funció,  aquesta funció:

    addTodo(text) {
        this.todos.push(new Todo({ text }));

        this._commit(this.todos);
    }

la variable 'text' no està definida pel que 'this' es undefined. El codi no sap quin text (quin valor) pendre. Després això ho estem passant a la funció view.bindAddTodo.  Aquesta també torna un undefined.

En canvi, this.view.bindAddTodo(this.handleAddTodo); el que fa es cridar passa la funció handleAddTodo que fa us del todoText que crida al get del todo.viws.js on es retorna un valor amb el this.input.value. Llavors podem dir que this.handleAddTodo es una funció que captura un valor. Per això el this aquí sí que queda definit i en conseqüència this.view.bindAddTodo() funciona amb aquest paràmetre.