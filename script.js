inputEl=document.getElementById('input')
todosUL=document.getElementById('todos')

loadTodos()


function loadTodos(){
    todos=JSON.parse(localStorage.getItem('todos'))
    if(todos !=undefined){
        todos.forEach(todos => addTodo(todo.text,todo.isCompleted));
    }
}