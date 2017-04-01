import React from 'react';
import IconButton from 'material-ui/IconButton';
import AddNewPhoto from 'material-ui/svg-icons/content/add';
import './styles.css';

export default function (props) {
	return (
		<div className='inputWrapper'>
    	<form onKeyDown={props.handleSubmit.bind(this)} className='inputContainer'>
        <div className='input'>
          {
            !props.message && <div className='typeMessege'>Type a messege...</div>
          }
          <div
            id='textArea'
            onInput={props.handleMessage.bind(this)}
            className='textArea' suppressContentEditableWarning={true} contentEditable={true}
					>
            {props.message}
          </div>
        </div>
        <div className='addPhotoWrapper'>
          <div className='formWrapper'>
          	<IconButton className='addPhotoButton'><AddNewPhoto /></IconButton>
            <input onChange={props.handleFile.bind(this)} className='inputImg' type='file' />
          </div>
        </div>
      </form>
    </div>
	);
};
