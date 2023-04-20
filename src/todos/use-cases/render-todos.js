import { Todo} from '../models/todo'
import { createTodoHTML } from './create-todo-html';
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] )  => {

    //Todo referencia 
    const  element = document.querySelector(elementId);
    todos.forEach(todos => {
        element.append( createTodoHTML(todos))
    });
}