"use strict";

import { combineReducers } from 'redux'

import { ADD_MESSAGE, LIKE_MESSAGE, SET_CURRENT_CHANNEL } from './actions'

function currentChannel(state = '#redux', action) {
    switch (action.type) {
        case SET_CURRENT_CHANNEL:
            return action.channel;
        default:
            return state;
    }
}

function messages(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                {
                    text: action.text,
                    likes: 0,
                    channel: action.channel,
                }
            ]
        case LIKE_MESSAGE:
            return [
                ...state.slice(0, action.index),
                {
                    ...state[action.index],
                    likes: state[action.index].likes + 1
                },
                ...state.slice(action.index + 1),
            ];
        default:
            return state;
    }
}

const miniWoop = combineReducers({
    currentChannel,
    messages,
});

export default miniWoop;