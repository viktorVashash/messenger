import React from 'react';
import Modal from 'react-modal';
import './styles.css';

export default function (props) {
  const modalStyles = {
    overlay : {
      zIndex: 2
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

	return (
		<Modal
			contentLabel="Photo Modal"
			style={modalStyles}
			onRequestClose={props.openPhoto}
			isOpen={props.modal}
		>
      <img src={props.img} className='fileMessage modalImage' />
    </Modal>
	);
};
