
const todosNote=document.querySelector('.todos')
const inputNote=document.querySelector('.input')
const btnNote=document.querySelector('.btn-primary')


const todos=[]

function addTodo(text) {
    const todo={
        done:false,
        id:`${Math.random()}`,
        text
    }
    todos.push(todo)
}

function deleteTodo(id) {
   todos.forEach( todo=>{if (id===todo.id) {
        todo.done=true
}})
}
function render() {
console.log(todos)
let html=''
todos.forEach(todo=>{
    if (todo.done) {
        return;
    }
    html+=`
    <div class="margin ">
    ${todo.text}
    <button class="btn btn-warning" data-id='${todo.id}'>
    Сделано
    </button>
    <hr style="width:300px;margin:8px auto 0 auto;height:2px; background-color:black; ">
    </div>`
})

todosNote.innerHTML=html    
}

btnNote.addEventListener('click',()=>{
    const text=inputNote.value
  
    addTodo(text)
    render()
    inputNote.value=''
})
todosNote.addEventListener('click',(event)=>{
    if (event.target.tagName!=='BUTTON') {
        return
    }
else if(event.target.tagName==='BUTTON') { const id=event.target.dataset.id
 deleteTodo(id)
render()}
})
btnNote.addEventListener('touchstart',()=>{
    const text=inputNote.value
  
    addTodo(text)
    todos.pop()
    render()
   
})
todosNote.addEventListener('touchstart',(event)=>{
    if (event.target.tagName!=='BUTTON') {
        return
    }
else if(event.target.tagName==='BUTTON') { const id=event.target.dataset.id
 deleteTodo(id)
render()}
})
render()