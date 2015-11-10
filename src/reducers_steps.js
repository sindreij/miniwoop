{
    currentChannel: '#redux',
    messages: [
        {
            text: 'Hello World',
            likes: 8,
            channel: '#redux',
        },
        {
            text: 'Heisann, Hoppsann',
            likes: 73,
            channel: '#redux',
        },
        {
            text: 'Yo!',
            likes: 2,
            channel: '#random',
        },
        {
            text: 'This is epic',
            likes: 3,
            channel: '#random',
        }  
    ]
}

/* 1 */

const initialState = {
    currentChannel: '#redux',
    messages: []
}

function miniWoop(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    return state;
}

/* 2 */

function miniWoop(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.channel,
            }
        default:
            return state;
    }
}

/* 3 */

function miniWoop(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.channel,
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        text: action.text,
                        likes: 0,
                        channel: action.channel,
                    }
                }
            }
        default:
            return state;
    }
}

/* 4 */

function miniWoop(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.channel,
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        text: action.text,
                        likes: 0,
                        channel: action.channel,
                    }
                ]
            }
        case LIKE_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages.slice(0, action.index),
                    {
                        ...state.messages[action.index],
                        likes: state.messages[action.index].likes + 1
                    },
                    ...state.messages.slice(action.index + 1),
                ]
            };
        default:
            return state;
    }
}

/* 5 */

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

function miniWoop(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.channel,
            }
        case ADD_MESSAGE:
        case LIKE_MESSAGE:
            return {
                ...state,
                messages: messages(state.messages, action),
            };
        default:
            return state;
    }
}

/* 6 */

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

function miniWoop(state = {}, action) {
    return {
        currentChannel: currentChannel(state, action),
        messages: messages(state, action),
    }
}

/* 7 */

const miniWoop = combineReducers({
    currentChannel,
    messages,
});