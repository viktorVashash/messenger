import React from 'react';

export default function (props) {
	const {color} = props;

	return (
		<div className='messageContent'>
      <span style={{color}}>{props.message.message}</span>
    </div>
	);
};
