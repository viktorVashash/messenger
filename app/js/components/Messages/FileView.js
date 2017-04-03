import React from 'react';
import ImageMessage from './ImageMessage';
import FileMessage from './FileMessage';

function getComponents (props) {
	switch (props.message.file.filetype) {
		case 'image':
			return ImageMessage;
		default:
			return FileMessage;
	}
}

export default function (props) {
	const CurrentComponent = getComponents(props);

	return (
		<CurrentComponent
			messageStyle={props.messageStyle}
			fileMessage={props.fileMessage}
			openPhoto={props.openPhoto}
			file={props.message}
		/>
	);
};
