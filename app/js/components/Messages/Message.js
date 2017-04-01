import React, {Component} from 'react';
import FileView from './FileView';
import TextMessage from './TextMessage';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';

export default class Message extends Component {
  openPhoto (file) {
    file.filetype === 'image' && this.props.openPhoto(file.data_uri);
  }

  componentDidMount () {
    const message = document.getElementById(this.props.message.mid);

    TweenMax.set(message, {
      scale: 0,
      opacity: 0
      });

    TweenMax.fromTo(message, .5, {
      scale: 0,
      opacity: 0,
      ease: Power1.easeOut
    }, {
      scale: 1,
      opacity: 1
    });
  }

  render () {
    const {message, friend} = this.props;
    const messageStyle = message.sender !== 0 ? 'left' : 'right';
    const fileMessage = !message.file ? '' : 'fileMessage';
    const color = message.sender !== 0 ? '#fff' : '2F3C47';

    return (
      <div id={message.mid} className='messageWrapper'>
        {
          message.sender !== 0
            &&
          <Subheader
            style={{
              color: '#fff',
              textTransform: 'uppercase',
              fontFamily: 'openSansLight',
              padding: 0
            }}
          >
            {friend.first_name}
          </Subheader>
        }
        <div className={`message ${messageStyle + ' ' + fileMessage}`}>
          {
            message.file ?
              <FileView
                message={message}
                messageStyle={messageStyle}
                fileMessage={fileMessage}
                color={color}
                openPhoto={this.openPhoto.bind(this)}
              />
            :
              <TextMessage
                message={message}
                color={color}
              />
          }
        </div>
      </div>
    );
  }
};
