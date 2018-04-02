import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import './styles/Message.css';

const Message = ({ icon, classes, userName, timestamp, content }) => (
    <div className={classnames(classes, 'message-container')}>
        <img className="message-img" src={icon} alt="Error" />
        <div>
            <div>
                <span className="message-username">{userName}</span>
                <span className="message-timestamp">{moment(timestamp).format('M/DD, h:mma')}</span>
            </div>
            <p className="message-content">{content}</p>
        </div>
    </div>
);

export default Message;
