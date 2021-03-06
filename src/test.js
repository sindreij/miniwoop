"use strict";

import { addMessage, likeMessage, setCurrentChannel } from './actions'
import store from './store'

console.log(store.getState());

let output = document.getElementById('output');

// Every time the state changes, log it
let unsubscribe = store.subscribe(() => {
    output.innerHTML = output.innerHTML + 
        '<div class="box"><pre>' +
        JSON.stringify(store.getState(), null, 4) + 
        '</div>';
  console.log(store.getState());
})

// Dispatch some actions
store.dispatch(addMessage('Hello World', '#redux'));
store.dispatch(addMessage('This is a message', '#redux'));
store.dispatch(addMessage('Woop, Woop!', '#redux'));
store.dispatch(addMessage('4!', '#random'));
store.dispatch(likeMessage(0));
store.dispatch(likeMessage(1));
store.dispatch(likeMessage(2));
store.dispatch(likeMessage(2));
store.dispatch(setCurrentChannel('#random'));

// Stop listening to state updates
unsubscribe();




