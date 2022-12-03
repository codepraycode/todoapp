const toString = (value) => JSON.stringify(value, null, 2) // helper function
const toObj = JSON.parse // helper function
const KEY = 'cpc-todo-store'

const initialTodos = [{
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


export const saveToStore = (data = null) => { // receives the key of the local storage and an initial value


    if (data === null && localStorage.getItem(KEY) === null) { // item not present in local storage
        localStorage.setItem(KEY, toString(initialTodos)) // initialize local storage with initial value    
    } else {
        localStorage.setItem(KEY, toString(data)) // initialize local storage with initial value
    }


    const saved = toObj(localStorage.getItem(KEY)) // convert to object

    return saved || [];
}


export const loadFromStore = () => { // receives the key of the local storage and an initial value


    if (localStorage.getItem(KEY) === null) { // item not present in local storage
        return [];
    }

    const saved = toObj(localStorage.getItem(KEY)) // convert to object

    return saved || [];
}