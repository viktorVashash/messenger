import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PhotoModal from './PhotoModal';
import Messages from './Messages';
import Input from './Input';
import './styles.css';

export default class Messeges extends Component {
  constructor (props) {
    super(props);

    this.state = {
      message: '',
      data_uri: '',
      filename: '',
      filetype: '',
      friend: 0,
      modal: false
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.openPhoto = this.openPhoto.bind(this);
  }

  componentWillMount () {
    this.loadMessages(1);
  }

  async loadMessages (id) {
    await this.props.MessagesActions.getMessagesByUserId(id);
    this.setState({
      friend: id
    });
  }

  componentWillReceiveProps (props) {
    if (props.friend.id && props.friend.id !== this.state.friend) {
      this.loadMessages(props.friend.id);
    }
  }

  openPhoto (uri) {
    this.setState({
      modal: !this.state.modal,
      data_uri: uri
    });
  }

  handleSubmit (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.textContent = '';

      const data = {
        mid: this.props.messages.messages.length,
        sender: 0,
        message: this.state.message
      };

      this.props.MessagesActions.addMessage(this.props.messages, data);
      setTimeout(() => {
        this.props.MessagesActions.feedBack(this.props.messages);
        this.setState({
          message: ''
        });
      }, 2000);

      this.setState({
        message: ''
      });
    } else if (event === 'file') {
      const {data_uri, filename, filetype} = this.state;
      const fileName = filename.slice(0, -4);
      const fileType = filetype.substring(0, 5);

      const data = {
        mid: this.props.messages.messages.length,
        sender: 0,
        file: {
          data_uri,
          filename: fileName,
          filetype: fileType
        }
      };

      this.props.MessagesActions.addMessage(this.props.messages, data);
      setTimeout(() => {
        this.props.MessagesActions.feedBack(this.props.messages);
        this.setState({
          message: ''
        });
      }, 2000);

      this.setState({
        message: ''
      });
    }
  }

  handleMessage (event) {
    this.setState({
      message: event.target.textContent
    });
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

      const key = 'file';

      this.handleSubmit(key);
    };

    reader.readAsDataURL(file);
  }

  render () {
    const {messages, friend} = this.props;

    return (
      <div className='messagesContainer' suppressContentEditableWarning={true}>
        <PhotoModal openPhoto={this.openPhoto} modal={this.state.modal} img={this.state.data_uri} />
        {messages && <Messages friend={friend} messages={messages.messages} openPhoto={this.openPhoto} />}
        <Input handleSubmit={this.handleSubmit} message={this.state.message} handleMessage={this.handleMessage} handleFile={this.handleFile} />
      </div>
    );
  }
};
