import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


export default class Friend extends Component {
  onFriendClick (id) {
    this.props.startChat(id)
  }

  render () {
    const {friend} = this.props;

    return (
      <div onClick={() => this.onFriendClick(friend.id)}>
        <ListItem
          primaryText={`${friend.first_name + ' ' + friend.last_name}`}
          leftAvatar={<Avatar src={friend.avatar} />}
          rightIcon={<CommunicationChatBubble />}
        />
        <Divider />
      </div>
    );
  }
}
