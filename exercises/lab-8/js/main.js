const todoTextarea = document.getElementById('todo-textarea');
const addTodoBtn = document.getElementById('addtodo-btn');
const todoContainer = document.getElementById('todo-container');


const state = {
    todoItems: [],
};

const setTodoItems = items => {
    state.todoItems = items;
};

const addTodoItem = item => {
    const todoItemsCopy = state.todoItems.slice();
    todoItemsCopy.push(item);
    setTodoItems(todoItemsCopy);
}

const buildTodoItem = (item, index) => {
    const todoEl = document.createElement('article');
    const textEl = document.createElement('p');
    const deleteBtn = document.createElement('button');
    
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', evt=>{
        removeTodoItem(index);
        buildTodoItems(state.todoItems);
    });


    textEl.innerHTML = item;

    todoEl.append(textEl,deleteBtn);
    return todoEl;
};

const buildTodoItems = items => {
    todoContainer.innerHTML='';
    const todoItemEls = state.todoItems.
    map(buildTodoItem);
    todoContainer.append(...todoItemElsss);
};

const main = () => {
    addTodoBtn.addEventListener('click'), evt => {
        const todoValue = todoTextarea.ariaValueMax;
        if(todoValue.length > 0) {
            addTodoItem(todoValue);
            buildTodoItems(state.todoItems);
        }
    };
};

main();