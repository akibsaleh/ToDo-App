const addForm = document.querySelector('.add');
const list = document.querySelector('.todo-list');
const deleteTodos = document.querySelector('.delete');
const search = document.querySelector('.search input');
const generateTemplate = todo => {
    const newTodo = `
        <li class="list-group-item d-flex justify-content-between align-content-center text-light py-3">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += newTodo; 
};

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.addtodo.value.trim();
    
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
    
});

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});