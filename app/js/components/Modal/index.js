import React, {Component} from 'react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import TouchApp from 'material-ui/svg-icons/action/touch-app';
import './styles.css';

export default class StartModal extends Component {
	constructor (props) {
		super(props);

		this.onUsernameType = this.onUsernameType.bind(this);
	}

	onSubmit (event) {
		event.preventDefault();
	}

	onUsernameType (event) {
		this.props.onUsernameType(event);
	}

	render () {
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
			<Modal contentLabel="Start Modal" style={modalStyles} isOpen={this.props.modal}>
	    	<div className='modalContainer'>
       		<h1 className='modalHeader'>Enter your name, please.</h1>
	        <form className='modalForm' onSubmit={this.onSubmit}>
	        	<input className='modalInput' type='text' onChange={this.onUsernameType} />
	          <RaisedButton
							className='modalButton'
							onClick={() => this.props.saveUsername()}
							icon={<TouchApp color='#2F3C47' />}
						/>
	        	{this.props.error && <span className='modalError'>Type minimum 3 symbol.</span>}
	      	</form>
	    	</div>
	    </Modal>
		);
	}
};
