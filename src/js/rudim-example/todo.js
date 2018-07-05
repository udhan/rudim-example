import { ul, button, li, div, input,rud } from 'rudim';

export function todo(state) {
    return [div,
        [todoItems, state.items],
        [todoInput, state.items]];
}

function addTodo(todos, textID) {
    //debugger;
    //let count = Object.keys(todos).length;
    let text = document.getElementById(textID);
    //todos[count] = {"text": text.value};
    todos.push({"text": text.value});
    text.value = '';
}

export function todoInput(todos) {
    let inputId = 'todo-input-text';
    return [div, {"class":"todo-input"},
        [input, {
            type: 'text',
            id: inputId,
            placeholder: 'Add new todo...'}],
        [button, {onclick: () => addTodo(todos, inputId)}, "Add"]];
}


export function todoItems(todos) {
    let comp = [ul];
    todos.forEach(element => {
        comp.push([li, element.text, [button, { "class": "todo-close" }, "X"]]);
    });
    return comp;
}