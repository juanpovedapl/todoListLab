
import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos, renderPendig } from './use-cases';

const ElementIds = {
    ClearCompletedButton: '.clear-completed',
    TodoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 *
 * @param {String} elementId
 */
export const App = ( elementId ) => {
    const updatePendingCount = () => {
        renderPendig(ElementIds.PendingCountLabel);
    }
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
        updatePendingCount();
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
    const  ClearCompletedButton = document.querySelector(ElementIds.ClearCompletedButton);
    const  filtersUL = document.querySelectorAll(ElementIds.TodoFilters);


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

    todoListUL.addEventListener('click', ( event ) => {
        const isDestroyELement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]'); // closest busca el elemento padre más cerano con la class data'id
        if ( !element || !isDestroyELement) return;
        todoStore.deleteTodo(element.getAttribute('data-id'))
        displayTodos();
    });

    ClearCompletedButton.addEventListener('click', ( ) => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersUL.forEach(element =>{

        element.addEventListener('click',(element) => {

            filtersUL.forEach(el => el.classList.remove('selected') );
            element.target.classList.add('selected');

            switch( element.target.text ){
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending)
                break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed)
                break;
            }

            displayTodos();
        })
    });
}
