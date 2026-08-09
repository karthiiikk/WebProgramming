interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

let todos: Todo[] =
    JSON.parse(localStorage.getItem('todos') || '[]');

let currentFilter: string = 'all';

function saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(text: string): void {
    const newTodo: Todo = {
        id: Date.now().toString(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    saveTodos();
    renderTodos();
}
