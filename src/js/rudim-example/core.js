import { render, rud, h1, h2, h3, span, div, hr, input, ul, li } from 'rudim';
import {todo} from './todo';

let appState = rud({title: "Rudim examples",
                    counter: {count: 0},
                    items: [1, 2, 3, 4],
                    timer: {seconds: 0},
                    todo: {items: [{text: "First item"}]}});

function aHeader(state){
    return [h1, {style: 'color: #900'}, state.title]
}

function aCounter(counter){
    return [div, 
            [h2, 'Counter'],
            [h3, 'count: ', [span, counter.count]],
            [input, {type: 'button',
                     value: 'Increment',
                     onclick:()=>counter.count++}]]
}

function aList(state){
    let comp = [ul]; 
    state.items.forEach(element => {
        comp.push([li, "Item " + element])
    });
    return [div, 
            [h2, "List"],
            comp];
}

function aTimer(state){
    setTimeout(()=>state.seconds++, 1000);
    return [div,
            "Seconds Elapsed: ",
            [span, state.seconds]];
}

function app(state){
    return [div, 
            [aHeader, state],
            [hr],
            [aCounter, state.counter],
            [hr],
            [aList, state],
            [hr],
            [aTimer, state.timer],
            [hr],
            [todo, state.todo]
        ]
}
render([app, appState], document.getElementById('app'));