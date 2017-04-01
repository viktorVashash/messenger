import React from 'react';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';

export default function (props) {
	const {messageStyle, fileMessage, color} = props;

	return (
		<div className={`${messageStyle}`}>
      <div className='messageContent'>
        <a
          className='fileLink'
          style={{color}}
          href={props.file.file.data_uri}
        >
          {props.file.file.filename}
        	<OpenInNew color={color}/>
        </a>
      </div>
    </div>
	);
};
