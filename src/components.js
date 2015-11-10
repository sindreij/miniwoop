"use strict";

import React from 'react';
import { Provider, connect } from 'react-redux'

import { addMessage, likeMessage, setCurrentChannel } from './actions'
import store from './store'

store.dispatch(addMessage('Hello World', '#redux'));
store.dispatch(addMessage('This is a message', '#redux'));
store.dispatch(addMessage('Woop, Woop!', '#redux'));
store.dispatch(addMessage('4!', '#random'));
store.dispatch(likeMessage(0));
store.dispatch(likeMessage(1));
store.dispatch(likeMessage(2));
store.dispatch(likeMessage(2));


export const TopLevel = (props) =>
    <Provider store={store}>
        <ConnectedMiniWoop />
    </Provider>

const select = state => ({
    currentChannel: state.currentChannel,
    messages: state.messages
        .map((msg, index) => ({
                ...msg,
                index
        }))
        .filter(msg => 
            msg.channel === state.currentChannel),
});

const MiniWoop = ({ dispatch, messages, currentChannel }) =>
    <div>
        <ChannelChooser dispatch={dispatch} currentChannel={currentChannel}/>
        <AddMessage dispatch={dispatch} currentChannel={currentChannel} />
        <MessageList dispatch={dispatch} messages={messages} />
    </div>

const ConnectedMiniWoop = connect(select)(MiniWoop);

const AddMessage = React.createClass({
    getInitialState() {
        return {
            text: '',
        }
    },

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    value={this.state.text} 
                    onChange={this.handleChange} 
                />
            </form>
        )
    },

    handleChange(event) {
        this.setState({
            text: event.target.value || "",
        })
    },

    handleSubmit(event) {
        event.preventDefault();

        this.props.dispatch(
            addMessage(this.state.text, this.props.currentChannel)
        )

        this.setState({
            'text': '',
        })
    },
});
    

const MessageList = ({ messages, dispatch }) => 
    <table border="1">
        <thead><tr><th>Likes</th><th></th><th>Text</th></tr></thead>
        <tbody>
            { messages.map( (message) => 
                <Message 
                    message={message}
                    key={message.index}
                    index={message.index}
                    dispatch={dispatch} />) }
        </tbody>
    </table>

const Message = ({ index, message, dispatch }) => 
    <tr>
        <td>{message.likes}</td>
        <td>
            <button onClick={() => dispatch(likeMessage(index))}>
                like
            </button>
        </td>
        <td>{ message.text }</td>
    </tr>

const channels = ['#redux', '#random', '#woop']

const ChannelChooser = ({ dispatch, currentChannel }) =>
    <div>
        { channels.map((channel) => 
            <Channel 
                channel={channel}
                isCurrent={currentChannel === channel}
                onClick={() => dispatch(setCurrentChannel(channel))} />)
        }
    </div>

const Channel = ({ channel, isCurrent, onClick }) => 
    <button onClick={onClick} className={ isCurrent ? 'active' : '' }>{ channel }</button>