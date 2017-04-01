import React from 'react';
import ImageMessage from './ImageMessage';
import FileMessage from './FileMessage';

export default function (props) {
	return (
		<div>
    	{
        props.message.file.filetype === 'image' ?
        <ImageMessage
          messageStyle={props.messageStyle}
          fileMessage={props.fileMessage}
          openPhoto={props.openPhoto}
          file={props.message}
        />
        :
        <FileMessage
          messageStyle={props.messageStyle}
          color={props.color}
          file={props.message}
        />
      }
    </div>
	);
};
