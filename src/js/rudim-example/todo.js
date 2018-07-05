import { ul, button, li, div, input,rud } from 'rudim';

export function todo(state) {
    return [div,
        [todoItems, state.items],
        [todoInput, state.items]];
}

function addTodo(todos, textID) {
    let text = document.getElementById(textID);
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

function removeTodo(todos, index){
    todos.splice(index, 1);
}

export function todoItems(todos) {
    let comp = [ul];
    todos.forEach((element, i) => {
        comp.push([li, element.text, 
            [button, { "class": "todo-close",
                        onclick:()=>removeTodo(todos, i) }, "X"]]);
    });
    return comp;
}