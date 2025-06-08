const initialState = Object.freeze({
    todos: [],
    filter: 'all'
});

let state = {...initialState};

const createTodo = (text, completed = false) => ({
    id: Date.now().toString(),
    text,
    completed
});

const todoOperations = {
    add: (todos, text) => [...todos, createTodo(text)],
    toggle: (todos, id) => todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    ),
    remove: (todos, id) => todos.filter(todo => todo.id !== id),
    filter: (todos, filter) => {
        switch(filter) {
            case 'active': return todos.filter(todo => !todo.completed);
            case 'completed': return todos.filter(todo => todo.completed);
            default: return [...todos];
        }
    }
};

const renderTodos = (todos, container) => {
    
    container.innerHTML = '';
    
    const renderRecursive = (index) => {
        if (index >= todos.length) return;
        
        const todo = todos[index];
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
            <span>${todo.text}</span>
            <button data-id="${todo.id}">Delete</button>
        `;
        container.appendChild(li);
        
        renderRecursive(index + 1);
    };
    
     renderRecursive(0);
};


const updateUI = () => {
    const filteredTodos = todoOperations.filter(state.todos, state.filter);
    renderTodos(filteredTodos, document.getElementById('todo-list'));
    
    document.querySelectorAll('#todo-filters button').forEach(button => {
        button.classList.toggle('active', button.dataset.filter === state.filter);
    });
};

const updateState = (updater) => {
    state = updater(state);
    updateUI();
};

document.getElementById('todo-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    
    if (text) {
        updateState(prevState => ({
            ...prevState,
            todos: todoOperations.add(prevState.todos, text)
        }));
        input.value = '';
    }
});

document.getElementById('todo-list').addEventListener('click', e => {
    if (e.target.matches('input[type="checkbox"]')) {
        const id = e.target.dataset.id;
        updateState(prevState => ({
            ...prevState,
            todos: todoOperations.toggle(prevState.todos, id)
        }));
    }
    
    if (e.target.matches('button:not([data-filter])')) {
        const id = e.target.dataset.id;
        updateState(prevState => ({
            ...prevState,
            todos: todoOperations.remove(prevState.todos, id)
        }));
    }
});

document.getElementById('todo-filters').addEventListener('click', e => {
    if (e.target.matches('button[data-filter]')) {
        updateState(prevState => ({
            ...prevState,
            filter: e.target.dataset.filter
        }));
    }
});

updateUI();