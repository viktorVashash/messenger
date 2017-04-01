import React from 'react';
import Message from './Message';
import './styles.css';

function renderMessages (props, message) {
  return (
    <Message
      key={message.mid}
    	message={message}
      openPhoto={props.openPhoto}
    	friend={props.friend}
    />
  );
};

export default function (props) {
	return (
		<div className='messagesWrapper'>
      <div className='messages'>
        {props.messages.map(renderMessages.bind(this, props))}
      </div>
    </div>
	);
};
