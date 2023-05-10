(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const v=`<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
    </header>
    
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
            <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a class="selected filtro" class="selected" href="#/">Todos</a>
            </li>
            <li>
                <a class="filtro" href="#/active">Pendientes</a>
            </li>
            <li>
                <a class="filtro" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`;let w;const L=new Uint8Array(16);function C(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(L)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function S(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:P};function E(e,t,r){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const i=e.random||(e.rng||C)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){r=r||0;for(let o=0;o<16;++o)t[r+o]=i[o];return t}return S(i)}class u{constructor(t){this.id=E(),this.description=t,this.done=!1,this.createAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},d={todos:[new u("Piedra del alma"),new u("Piedra del infinito"),new u("Piedra del tiempo"),new u("Piedra del poder"),new u("Piedra del poveda"),new u("Piedra del campo")],filter:c.All},A=()=>{U(),console.log("Init Storage")},U=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));d.todos=e,d.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(d))},k=e=>{if(!e)throw new Error("Descriptions is required");d.todos.push(new u(e)),f()},I=(e=c.All)=>{switch(e){case c.All:return[...d.todos];case c.Completed:return d.todos.filter(t=>t.done);case c.Pending:return d.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},x=e=>{d.todos=d.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},O=e=>{d.todos=d.todos.filter(t=>t.id!==e),f()},q=()=>{d.todos=d.todos.filter(e=>!e.done),f()},D=(e=c.All)=>{d.filter=e,f()},F=()=>d.filter,a={addTodo:k,deleteCompleted:q,deleteTodo:O,getCurrentFilter:F,getTodos:I,initStore:A,setFilter:D,toggleTodo:x};let b;const M=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Elemet ${e} not found`);b.innerHTML=a.getTodos(c.Pending).length},H=e=>{if(!e)throw new Error("A TODO object is required");const{done:t,description:r,id:i}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" ${t?"checked":""}>
            <label>${r}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",i),t&&n.classList.add("completed"),n};let g;const V=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(r=>{g.append(H(r))})},h={ClearCompletedButton:".clear-completed",TodoList:".todo-list",newTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},N=e=>{const t=()=>{M(h.PendingCountLabel)},r=()=>{const l=a.getTodos(a.getCurrentFilter());V(h.TodoList,l),t()};(()=>{const l=document.createElement("div");l.innerHTML=v,document.querySelector(e).append(l),r()})();const i=document.querySelector(h.newTodoInput),o=document.querySelector(h.TodoList),n=document.querySelector(h.ClearCompletedButton),p=document.querySelectorAll(h.TodoFilters);i.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(a.addTodo(l.target.value),r(),l.target.value="")}),o.addEventListener("click",l=>{const m=l.target.closest("[data-id]");a.toggleTodo(m.getAttribute("data-id")),r()}),o.addEventListener("click",l=>{const m=l.target.className==="destroy",y=l.target.closest("[data-id]");!y||!m||(a.deleteTodo(y.getAttribute("data-id")),r())}),n.addEventListener("click",()=>{a.deleteCompleted(),r()}),p.forEach(l=>{l.addEventListener("click",m=>{switch(p.forEach(y=>y.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"Todos":a.setFilter(c.All);break;case"Pendientes":a.setFilter(c.Pending);break;case"Completados":a.setFilter(c.Completed);break}r()})})};console.log("Que rico pais! ");a.initStore();N("#app");
