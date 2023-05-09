
import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIds = {
    TodoList: '.todo-list',
    newTodoInput: '#new-todo-input',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
    }
     // Cuando  la funcion app se llama
    (()=> {
        const app =document.createElement("div");
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIds.newTodoInput );
    const todoListUL = document.querySelector( ElementIds.TodoList );

    //Listener 
    newDescriptionInput.addEventListener('keyup', (event) =>{
        if (event.keyCode !== 13 ) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo (event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', ( event ) => {

        const element = event.target.closest('[data-id]'); // closest busca el elemento padre más cerano con la class data'id
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();


    });
}
