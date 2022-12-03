import './scss/style.scss';
import { loadFromStore, saveToStore } from './store';

const print = console.log;
// Filters
const undone_filter = document.querySelector('[data-filter--undone]');
const all_filter = document.querySelector('[data-filter--all]');
const completed_filter = document.querySelector('[data-filter--completed]');


let filter = 'all';
let todos = loadFromStore();

window.onload = (e) => {
    // Run function when the browser loads
    // renderTodos();


    const taskInputForm = document.getElementById("taskInput");
    all_filter.click();

    // print(taskInputForm);
    taskInputForm.onsubmit = (e) => {
        e.preventDefault();

        // console.log(e.form);

        const enteredTask = document.querySelector("[name='new_task']");

        const task = enteredTask.value;

        todos.push({
            id: todos.length > 0 ? todos.length + 1 : 1,
            task,
            completed: false
        });

        todos = saveToStore(todos);

        renderTodos();
        enteredTask.value = '';
    };


    document.getElementById("theme-cog").addEventListener('click', (e) => {
        const prev = document.body.dataset.theme;

        document.body.dataset.theme = prev === "light" ? "dark" : "light";

    })

}

function trackTodos() {
    const cancels = document.querySelectorAll('[data-cancel_id]');

    cancels.forEach((each) => each.addEventListener('click', (e) => {

        let todoId = parseInt(e.target.dataset.cancel_id);
        removeTodo(todoId);
    }));


    const todoItems = document.querySelectorAll('[data-todo_index]');

    todoItems.forEach((each) => each.addEventListener('click', (e) => {

        let todoIndex = parseInt(e.target.dataset.todo_index);

        updateTodo(todoIndex);
    }));
}



const todoListContainer = document.querySelector('[data-task_lists]');

const renderTodos = () => {

    let content = '';

    // filter content based on keyword
    let filteredTodo = todos;

    if (filter === 'active') filteredTodo = todos.filter((t) => !t.completed);
    else if (filter === 'completed') filteredTodo = todos.filter((t) => t.completed);


    filteredTodo.forEach((each, index) => {
        content += `

        <div class="task" data-completed=${each.completed ? 'true': 'false'}>
            <span class="checker" data-todo_index="${index}"></span>

            <p data-todo_index="${index}">${each.task}</p>

            <span class="canceler" data-cancel_id="${each.id}"></span>
        </div>

        `
    });

    todoListContainer.innerHTML = content;
    trackTodos();


    document.querySelector("[data--indicator]").innerHTML = `${filteredTodo.length} item${filteredTodo.length > 1 ? 's':''} left`;


}



const updateActiveFilter = () => {

    // keyword is either -> all, active, completed

    if (filter === 'all') {
        all_filter.classList.add('active');
    } else {
        all_filter.classList.remove('active');
    }

    if (filter === 'active') {
        undone_filter.classList.add('active');
    } else {
        undone_filter.classList.remove('active');
    }

    if (filter === 'completed') {
        completed_filter.classList.add('active');
    } else {
        completed_filter.classList.remove('active');
    }
}

undone_filter.addEventListener('click', (e) => {
    e.preventDefault();

    filter = 'active';
    updateActiveFilter();
    renderTodos();


})

all_filter.addEventListener('click', (e) => {
    e.preventDefault();


    filter = 'all';
    updateActiveFilter();
    renderTodos();

});

completed_filter.addEventListener('click', (e) => {
    e.preventDefault();

    filter = 'completed';
    updateActiveFilter();
    renderTodos();
});


// Clear
const clear_completed = document.querySelector('[data-filter--clear]');
clear_completed.addEventListener('click', (e) => {
    e.preventDefault();


    todos = saveToStore(todos.filter((t) => !t.completed));
    renderTodos();
});


const removeTodo = (todoId) => {


    todos = saveToStore(todos.filter((t) => t.id !== todoId));

    renderTodos();
}


const updateTodo = (todoIndex) => {
    todos[todoIndex].completed = !todos[todoIndex].completed;
    todos = saveToStore(todos);
    renderTodos();
}