function addTodo() {
    const todos = document.getElementById('todos');

    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    const todo = makeTodo(textTodo, timestamp);

    todos.append(todo);
}

function makeTodo(text, timestamp) {

    const textTodo = document.createElement('h3');
    textTodo.innerText = text;

    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = timestamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('text');
    textContainer.append(textTodo, textTimestamp);

    const checkboxTodo = document.createElement('input');
    checkboxTodo.setAttribute('id', text);
    checkboxTodo.setAttribute('type', 'checkbox');
    checkboxTodo.setAttribute('name', 'todo');

    const labelTodo = document.createElement('label');
    labelTodo.append(checkboxTodo, textContainer);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');

    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-item');
    todoContainer.classList.add('active');
    todoContainer.append(labelTodo, removeButton);

    return todoContainer;

}