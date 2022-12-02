import './scss/style.scss';

const print = console.log;
// Filters
const undone_filter = document.querySelector('[data-filter--undone]');
const all_filter = document.querySelector('[data-filter--all]');
const completed_filter = document.querySelector('[data-filter--completed]');


let todos = [{
        id: 1,
        task: "Completed online Javascript course",
        completed: true
    },
    {
        id: 2,
        task: "Jog around the park 3x",
        completed: false
    },
    {
        id: 3,
        task: "10 minutes meditation",
        completed: false
    },
    {
        id: 4,
        task: "Read for 1 hour",
        completed: false
    },
    {
        id: 5,
        task: "Pick up groceries",
        completed: false
    },
    {
        id: 6,
        task: "Complete Todo App on Frontend Mentor",
        completed: false
    },
]

let filter = 'all';

window.onload = (e) => {
    // Run function when the browser loads
    // renderTodos();


    const taskInputForm = document.getElementById("taskInput");
    all_filter.click();

    // print(taskInputForm);
    taskInputForm.onsubmit = (e) => {
        e.preventDefault();

        // console.log(e.form);

        const enteredTask = document.querySelector("[name='new_task']").value;

        print(enteredTask);
    };


    document.querySelectorAll('[data-cancel]').forEach((each) => {

        each.addEventListener('click', (e) => {
            let todoId = parseInt(e.target.dataset.cancel_id);
            removeTodo(todoId);
        })
    })
}



const todoListContainer = document.querySelector('[data-task_lists]');

const renderTodos = () => {

    let content = '';

    // filter content based on keyword
    let filteredTodo = todos;

    if (filter === 'active') filteredTodo = todos.filter((t) => !t.completed);
    else if (filter === 'completed') filteredTodo = todos.filter((t) => t.completed);


    filteredTodo.forEach((each) => {
        content += `

        <div class="task" data-completed=${each.completed ? 'true': 'false'}>
            <p>${each.task}</p>

            <span data-cancel_id="${each.id}"></span>
        </div>

        `
    });

    todoListContainer.innerHTML = content;


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


    todos = todos.filter((t) => !t.completed);
    renderTodos();
});


const removeTodo = (todoId) => {
    todos = todos.filter((t) => t.id !== todoId);
    renderTodos();
}