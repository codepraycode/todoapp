import './scss/style.scss';

const print = console.log;
// Filters
const undone_filter = document.querySelector('[data-filter--undone]');
const all_filter = document.querySelector('[data-filter--all]');
const completed_filter = document.querySelector('[data-filter--completed]');


const todos = [{
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
}



const todoListContainer = document.querySelector('[data-task_lists]');

const renderTodos = (keyword) => {

    let content = '';

    // filter content based on keyword
    let filteredTodo = todos;

    if (keyword === 'active') filteredTodo = todos.filter((t) => !t.completed);
    else if (keyword === 'completed') filteredTodo = todos.filter((t) => t.completed);


    filteredTodo.forEach((each) => {
        content += `

        <div class="task" data-completed=${each.completed ? 'true': 'false'}>
            <p>${each.task}</p>
        </div>

        `
    });

    todoListContainer.innerHTML = content;


}




const updateActiveFilter = (keyword) => {

    // keyword is either -> all, active, completed

    if (keyword === 'all') {
        all_filter.classList.add('active');
    } else {
        all_filter.classList.remove('active');
    }

    if (keyword === 'active') {
        undone_filter.classList.add('active');
    } else {
        undone_filter.classList.remove('active');
    }

    if (keyword === 'completed') {
        completed_filter.classList.add('active');
    } else {
        completed_filter.classList.remove('active');
    }
}

undone_filter.addEventListener('click', (e) => {
    e.preventDefault();

    renderTodos('active');
    updateActiveFilter('active');

})

all_filter.addEventListener('click', (e) => {
    e.preventDefault();

    renderTodos('all');
    updateActiveFilter('all');
});

completed_filter.addEventListener('click', (e) => {
    e.preventDefault();

    renderTodos('completed');
    updateActiveFilter('completed');
});


// Clear
const clear_completed = document.querySelector('[data-filter--clear]');
clear_completed.addEventListener('click', (e) => {
    e.preventDefault();

    print("Clear completed");
});