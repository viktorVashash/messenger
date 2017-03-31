import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Message extends Component {
  render () {
    const {message} = this.props;
    const messageStyle = message.sender !== 0 ? 'left' : 'right';
    const fileMessage = !message.file ? '' : 'fileMessage'

    return (
        <div className='messageWrapper'>
          <div className={`message ${messageStyle + ' ' + fileMessage}`}>
            {message.file ?
              <button className={`fileButton ${messageStyle + ' ' + fileMessage}`}>
                <img className={`file ${messageStyle + ' ' + fileMessage}`} src={message.file.data_uri} />
              </button>
              :
              <div className='messageContent'>
                <span className='messageText'>{message.message}</span>
              </div>
            }
          </div>
        </div>
    );
  }
}
