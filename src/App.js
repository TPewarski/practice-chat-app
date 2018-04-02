import React, { Component } from 'react';
import ChatWindow from './chatWindow/ChatWindow';
import { messages, users } from './initialState';
import omit from 'lodash.omit';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users,
            messages
        };

        this.updateInput = this.updateInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateInput(userId, message) {
        this.setState(prevState => {
            const users = prevState.users;
            const user = users[userId];
            const updatedUsers = {
                ...users,
                [userId]: { ...user, input: message }
            };
            return { ...prevState, users: updatedUsers };
        });
    }

    onSubmit(senderId, recipientId) {
        const sender = this.state.users[senderId];
        if (sender.input) {
            const message = {
                timestamp: Date.now(),
                sender: omit(sender, 'input'),
                recipient: omit(this.state.users[recipientId], 'input'),
                content: sender.input
            };

            this.setState({ messages: this.state.messages.concat(message) });
            this.updateInput(senderId, '');
        }
    }
    render() {
        return (
            <div className="container">
                <ChatWindow
                    user={this.state.users.b_123}
                    partner={this.state.users.a_123}
                    messages={this.state.messages}
                    onChange={this.updateInput}
                    onSubmit={this.onSubmit}
                    classes="left-window"
                    key="b_123"
                />
                <ChatWindow
                    user={this.state.users.a_123}
                    partner={this.state.users.b_123}
                    messages={this.state.messages}
                    onChange={this.updateInput}
                    onSubmit={this.onSubmit}
                    classes="right-window"
                    key="a_123"
                />
            </div>
        );
    }
}

export default App;
