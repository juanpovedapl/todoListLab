import './style.css'
import { App } from './src/todos/app'
import todoStore from './src/store/todo.store.js'
console.log("Que rico pais! ")

todoStore.initStore();

App('#app')