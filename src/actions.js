"use strict";

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LIKE_MESSAGE = 'LIKE_MESSAGE';
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';

// {
//     type: ADD_MESSAGE,
//     text: "Hello World!",
//     channel: '#redux'
// }

// {
//     type: LIKE_MESSAGE,
//     index: 5
// }

// {
//     type: SET_CURRENT_CHANNEL,
//     channel: '#redux'
// }


export function addMessage(text, channel) {
    return {
        type: ADD_MESSAGE,
        text,
        channel,
    }
}

export function likeMessage(index) {
    return {
        type: LIKE_MESSAGE,
        index,
    }
}

export function setCurrentChannel(channel) {
    return {
        type: SET_CURRENT_CHANNEL,
        channel,
    }
}