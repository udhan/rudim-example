import { ul, button, li, div, input, h2 } from 'rudim';

export function todo(state) {
    return [div,
        [h2, 'TODO List'],
        [todoInput, state.items],
        [todoItems, state.items]];
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
            placeholder: 'Add new todo...',
            e:{type:'keyup', listener:(e)=>{
                e.preventDefault();
                if(e.keyCode == 13){
                    addTodo(todos, inputId);
                }
            }}}]];
}

function removeTodo(todos, index){
    todos.splice(index, 1);
}

export function todoItems(todos) {
    let comp = [ul];
    todos.forEach((element, i) => {
        comp.push([li, element.text, 
            [button, { "class": "todo-close",
                        e: {type: 'click', listener: ()=>removeTodo(todos, i) }}, "X"]]);
    });
    return comp;
}