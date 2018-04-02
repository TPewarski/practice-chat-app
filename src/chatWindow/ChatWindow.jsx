import React from 'react';
import classnames from 'classnames';
import Message from './Message';
import './styles/ChatWindow.css';

const ChatWindow = ({ user, messages, partner, classes, onChange, onSubmit }) => (
    <div className={classnames(classes, 'chat-window-container')}>
        <div className="chat-window-message-container">
            {messages.map(message => {
                const { id: messageId, timestamp, sender, content } = message;
                const { id: senderId, userName, icon } = sender;
                const messageClass =
                    senderId === user.id
                        ? 'chat-window-message-sent'
                        : 'chat-window-message-received';

                return (
                    <Message
                        key={messageId || timestamp}
                        classes={messageClass}
                        icon={icon}
                        userName={userName}
                        timestamp={timestamp}
                        content={content}
                    />
                );
            })}
            {partner.input && (
                <div className="chat-window-typing">{partner.userName} is typing... </div>
            )}
        </div>
        <div className="chat-window-input-container">
            <input
                onChange={e => {
                    onChange(user.id, e.target.value);
                }}
                onKeyDown={e => {
                    if (e.keyCode === 13) {
                        onSubmit(user.id, partner.id);
                    }
                }}
                className="chat-window-input"
                type="text"
                placeholder="Enter your message here"
                value={user.input}
            />
            <div className="chat-window-submit" onClick={() => onSubmit(user.id, partner.id)}>
                Submit
            </div>
        </div>
    </div>
);

export default ChatWindow;
