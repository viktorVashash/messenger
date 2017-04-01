import React from 'react';

export default function (props) {
	const {messageStyle, fileMessage} = props;

	return (
		<div className={`${messageStyle + ' ' + fileMessage}`}>
    	<button
        onClick={() => props.openPhoto(props.file.file)}
        className={`fileButton ${messageStyle + ' ' + fileMessage}`}
      >
        <img className={`file ${messageStyle + ' ' + fileMessage}`} src={props.file.file.data_uri} />
      </button>
  	</div> 
	);
};
