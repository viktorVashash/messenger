import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


export default class Friend extends Component {
  constructor (props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  onFriendClick (friend) {
    this.setState({
      clicked: !this.state.clicked
    });

    this.props.startChat(friend);
  }

  render () {
    const {friend, activeStyle} = this.props;
    const backgroundColor = activeStyle ? 'active' : '';
    const color = activeStyle ? '#fff' : '#2F3C47';

    return (
      <div className={backgroundColor} onClick={() => this.onFriendClick(friend)}>
        <ListItem
          style={{color, fontFamily: 'openSansLight'}}
          disabled={activeStyle}
          primaryText={`${friend.first_name + ' ' + friend.last_name}`}
          leftAvatar={<Avatar src={friend.avatar} />}
          rightIcon={<CommunicationChatBubble color={color} />}
        />
        <Divider />
      </div>
    );
  }
}
