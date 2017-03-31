import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import AddNewPhoto from 'material-ui/svg-icons/content/add';
import Message from './Message';
import './styles.css';

export default class Messeges extends Component {
  constructor (props) {
    super(props);

    this.state = {
      message: '',
      data_uri: '',
      filename: '',
      filetype: ''
    }

    this.handleFile = this.handleFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
     window.addEventListener('scroll', this.handleScroll);
  }

  onScroll () {
    console.log('scroll');
  }

  handleSubmit (event) {
    const self = this;
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.textContent = '';
      const data = {
        mid: this.props.messages.length + 1,
        sender: 0,
        message: this.state.message
      }
      this.props.addMessage(data);
      this.setState({
        message: ''
      })
    } else if (event.key === 'file') {
      const {data_uri, filename, filetype} = this.state;
      const data = {
        mid: this.props.messages.length + 1,
        sender: 0,
        file: {
          data_uri,
          filename,
          filetype
        }
      }
      this.props.addMessage(data);
    }
  }

  handleMessege (event) {
    this.setState({
      message: event.target.textContent
    })
  }

  handleFile (event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });

      const e = {
        key: 'file'
      }

      this.handleSubmit(e);
    };

    reader.readAsDataURL(file);
  }

  renderMessages (message) {
    return (
      <Message key={message.mid} message={message} />
    );
  }

  render () {
    const {messages} = this.props;

    return (
      <div className='messagesContainer'>
        <div className='messagesWrapper'>
          <div className='messages'>
          {messages.map(this.renderMessages.bind(this))}
        </div>
        </div>
        <div className='inputWrapper'>
          <form onKeyDown={this.handleSubmit} className='inputContainer'>
            <div className='input'>
              {!this.state.message && <div className='typeMessege'>Type a messege...</div>}
              <div id='textArea' onInput={this.handleMessege.bind(this)} className='textArea' contentEditable={true}>{this.state.messege}</div>
            </div>
            <div className='addPhotoWrapper'>
              <div className='formWrapper'>
                <IconButton className='addPhotoButton'><AddNewPhoto /></IconButton>
                <input onChange={this.handleFile} className='inputImg' type='file' />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
