import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import './styles.css';

export default class Friends extends Component {
  render () {
    return (
      <div className='friendsContainer'>
        <List>
          <Subheader>Recent chats</Subheader>
          <ListItem
            primaryText="Brendan Lim"
            leftAvatar={<Avatar src="images/1.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Eric Hoffman"
            leftAvatar={<Avatar src="images/1.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Grace Ng"
            leftAvatar={<Avatar src="images/1.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Kerem Suer"
            leftAvatar={<Avatar src="images/1.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Raquel Parrado"
            leftAvatar={<Avatar src="images/1.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
        </List>
        <Divider />
      </div>
    );
  }
};
