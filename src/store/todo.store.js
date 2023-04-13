import { Todo } from '../todos/models/todo.js'

const Filters = {
    All: "all",
    Completed: 'Completed',
    Pending: 'Pending'
}

const state ={
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log ('Store asasas');
}

const loadStore = () => {
    throw new Error('Not implemented');
}
/**
 * 
 * @param {*} description 
 */
const addTodo = ( description ) => {
    throw new Error('Not implemented');

}
/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId)=> {
    throw new Error('Not implemented');

}

const deleteTodo = ( todoId)=> {
    throw new Error('Not implemented');

}

const deleteCompleted = () => {
    throw new Error('Not implemented');

}

const setFilter = ( newFilter = Filters.All) => {
    throw new Error('Not implemented');

}

const getCurrentFilter = () => {
    throw new Error ('Not Implemented');
}

export default{
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    setFilter,
    toggleTodo,
}