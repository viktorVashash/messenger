import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import AddNewPhoto from 'material-ui/svg-icons/image/add-a-photo';
import './styles.css';

export default class Messeges extends Component {
  constructor (props) {
    super(props);

    this.state = {
      messege: ''
    }

    this.handleFile = this.handleFile.bind(this)
  }

  handleMessege (e) {
    this.setState({
      messege: e.target.textContent
    })
  }

  handleFile (e) {
    console.log(e.target.files[0]);
    const reader = new FileReader();
  }

  render () {
    return (
      <div className='messegesContainer'>
        <div className='messegesWrapper'></div>
        <Divider />
        <div className='inputWrapper'>
          <div className='input'>
            {!this.state.messege && <div className='typeMessege'>Type a messege...</div>}
            <div id='textArea' onInput={this.handleMessege.bind(this)} className='textArea' contentEditable={true}></div>
          </div>
          <div className='addPhotoWrapper'>
            <form onSubmit={this.handleFile} className='formWrapper'>
              <IconButton className='addPhotoButton'><AddNewPhoto /></IconButton>
              <input onChange={this.handleFile} className='inputImg' type='file' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
